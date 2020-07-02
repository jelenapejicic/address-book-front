export const fetchFunc = async (urlParam, requestOptions) => {

    const url = 'http://localhost:8080/imenik/api/contact/' + urlParam;

    if (urlParam === 'read.php') {

        
            const response = await fetch(url, requestOptions);
            const resJson =  await response.json();

            console.log('Response', resJson.records);
            return resJson.records;
        
    }
    else {

        const response = fetch(url, requestOptions).then(res => res.json())
            .then(data => {
                console.log(data);
                return data;
            });


    }

};