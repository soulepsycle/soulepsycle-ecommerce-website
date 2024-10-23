export async function POST(request: Request) {
    try {
        // create statis data for testing development
        
        return Response.json({
            req_method: request.method
        })
    } catch (error) {
        console.log('[SEED_POST]: ' + error)
    }
}