import IDalProvider from "./idal-provider";
import * as admin from 'firebase-admin';
import {GenericObject} from "../types";
import firebase from 'firebase';

class DalProvider implements IDalProvider {

    private collectionName = '';

    // A reference to the typescript types can be found here https://firebase.google.com/docs/reference/admin/node/admin.firestore
    constructor(private readonly database: admin.firestore.Firestore) {}

    setCollectionName (collectionName: string):void {
        this.collectionName = collectionName
    }

    async create(id: string, data: Record<string, unknown>): Promise<GenericObject> {
        await this.database.collection(this.collectionName).doc(id).set(data)
        return data
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

    private processResults (snapshot: firebase.firestore.DocumentData):Array<GenericObject> {
        if (snapshot.empty) {
            return []
        }
        const docs:Array<GenericObject> = [];
        snapshot.forEach((doc: { id: any; data: () => Record<string, unknown>; }) => {
            docs.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return docs
    }

    async fetchAll ():Promise<Array<GenericObject>> {
        const snapshot = await this.database.collection(this.collectionName).get();
        return this.processResults(snapshot)
    }

    /**
     *
     * @param queryableField - This is a field we wish to query against e.g. email of a user
     * @param filter - The filter operator can be ==, != or any logical operator
     * @param query - The value we wish to query for using the field above
     */
    async fetchAllWithQuery(queryableField:string, filter:string, query: string): Promise<Array<GenericObject>> {
        // @ts-ignore
        const snapshot = await this.database.collection(this.collectionName).where(queryableField, filter, query).get();
        return this.processResults(snapshot)
    }

    async fetchById(id: string): Promise<GenericObject|null> {
        const snapshot = await this.database.collection(this.collectionName).doc(id).get();
        if (!snapshot.exists) {
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
