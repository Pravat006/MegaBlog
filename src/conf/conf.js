const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwritProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    //tinyMceApiKey: String(import.meta.env.TINY_MCE_API_KEY)

};

export default conf;
