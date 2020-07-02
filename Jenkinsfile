node {

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {	 

        // Install the dependencies
        sh 'npm install'

        // Build the project
        sh 'npm run build'

        // Build the docker image with the tag "sample-app"
        sh 'docker build -t sample-app .'

        // Export the docker image as sample-app.tar file
        sh 'docker save -o sample-app.tar sample-app:latest'	    
    }

    stage('Push image') {
	    
        // Push the image
        sh 'scp -o StrictHostKeyChecking=No sample-app.tar root@127.0.0.1:/root'
        
        // Stop the running container
        sh 'ssh -o StrictHostKeyChecking=No root@127.0.0.1 docker stop sample-container'
            
        // Remove the running container   
        sh 'ssh -o StrictHostKeyChecking=No root@127.0.0.1 docker rm sample-container'
        
        // Remove the current image 
        sh 'ssh -o StrictHostKeyChecking=No root@127.0.0.1 docker rmi sample-app'
            
        // Load the new image
        sh 'ssh -o StrictHostKeyChecking=No root@127.0.0.1 docker load -i sample-app.tar'
            
        // Run the container
        sh 'ssh -o StrictHostKeyChecking=No root@127.0.0.1 docker run -d --name sample-container -p 80:80 --restart=always sample-app'    
    }

    stage('Remove image from Jenkins') {

        // Remove the exported file
        sh 'rm sample-app.tar'

        // Remove the docker image from Jenkins server 
        sh 'docker rmi sample-app'  
    }
}