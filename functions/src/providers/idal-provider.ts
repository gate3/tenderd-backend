import {GenericObject} from "../types";

interface IDalProvider {
    // Record<string, unknown> - replaces using an object {}

    create (id:string, data:GenericObject):Promise<GenericObject>

    // This function will make use of .add function in firebase
    createWithAutoId (data:Record<string, unknown>):Promise<GenericObject>

    fetchAllWithQuery (queryableField:string, filter:string, query: string):Promise<Array<GenericObject>>

    fetchById (id:string):Promise<GenericObject|null>

    update (id:string, data:GenericObject):Promise<GenericObject>

    delete (query:string):Promise<void>

    setCollectionName (collectionName: string):void
}

export default IDalProvider;
