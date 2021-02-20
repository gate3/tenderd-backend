import IDalProvider from "./idal-provider";
import * as admin from 'firebase-admin';
import {GenericObject} from "../types";

class DalProvider implements Partial<IDalProvider> {

    private collectionName = '';

    // A reference to the typescript types can be found here https://firebase.google.com/docs/reference/admin/node/admin.firestore
    constructor(private readonly database: admin.firestore.Firestore) {}

    setCollectionName (collectionName: string):void {
        this.collectionName = collectionName
    }

    async createWithAutoId(data: Record<string, unknown>): Promise<Record<string, unknown>> {
        const result = await this.database.collection(this.collectionName).add(data);
        const newEntityId = result.id;
        return {
            id: newEntityId,
            ...data
        }
    }

    async delete(id: string): Promise<void> {
        await this.database.collection(this.collectionName).doc(id).delete();
    }

    /**
     *
     * @param queryableField - This is a field we wish to query against e.g. email of a user
     * @param filter - The filter operator can be ==, != or any logical operator
     * @param query - The value we wish to query for using the field above
     */
    async fetchAll(queryableField:string, filter:string, query: string): Promise<Array<GenericObject>> {
        // @ts-ignore
        const snapshot = await this.database.collection(this.collectionName).where(queryableField, filter, query).get()
        if (snapshot.empty) {
            return []
        }
        const docs:Array<GenericObject> = [];
        snapshot.forEach(doc => {
            docs.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return docs
    }

    async fetchById(id: string): Promise<GenericObject|null> {
        const snapshot = await this.database.collection(this.collectionName).doc(id).get();
        if (snapshot.exists) {
            return null
        }
        return {
            ...snapshot.data()
        }
    }

    async update(id: string, data: Record<string, unknown>): Promise<GenericObject> {
        await this.database.collection(this.collectionName).doc(id).set(data)
        return data
    }
}

export default DalProvider
