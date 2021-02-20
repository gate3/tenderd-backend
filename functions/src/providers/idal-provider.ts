import {GenericObject} from "../types";

interface IDalProvider {
    // Record<string, unknown> - replaces using an object {}
    // This function will make use of the .set function in firebase
    create (data:Record<string, unknown>):Promise<GenericObject>
    // This function will make use of .add function in firebase
    createWithAutoId (data:Record<string, unknown>):Promise<GenericObject>

    fetchAll (queryableField:string, filter:string, query: string):Promise<Array<GenericObject>>

    fetchById (id:string, query:string):Promise<GenericObject|null>

    update (query:string, data:GenericObject):Promise<GenericObject>

    delete (query:string):Promise<void>
}

export default IDalProvider;
