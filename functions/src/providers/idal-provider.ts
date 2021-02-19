interface IDalProvider {
    // Record<string, unknown> - replaces using an object {}
    // This function will make use of the .set function in firebase
    create (data:Record<string, unknown>):Record<string, unknown>
    // This function will make use of .add function in firebase
    createWithAutoId (data:Record<string, unknown>):Record<string, unknown>
    fetchAll (query:string):Array<Record<string, unknown>>
    fetchById (id:string, query:string):Record<string, unknown>
    update (query:string, data:Record<string, unknown>):Record<string, unknown>
    delete (query:string):Record<string, unknown>
}

export default IDalProvider;
