let token = '8769330831fa465105ef5a77fd2c330d9dff87172c55e029';

export const api_routes = {
    get: async () => {
        const response = await fetch(`https://my-digitial-library-jdchan.herokuapp.com/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`https://my-digitial-library-jdchan.herokuapp.com/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://my-digitial-library-jdchan.herokuapp.com/api/books/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`https://my-digitial-library-jdchan.herokuapp.com/api/books/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
