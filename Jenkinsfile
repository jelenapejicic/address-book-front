node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      bat  'git --version'
     
      //bat 'npm install'
      //bat 'npm run eslint'

      echo "Branch: ${env.BRANCH_NAME}"
      bat  'docker -v'
      
    }
    stage('Build Docker test'){
     bat  'docker build -t react-test --no-cache .'
    }
    stage('Docker test'){
      // bat 'docker ps'
      // bat 'docker cp 7a461c42b6e7:/usr/src/app \"C:\\Program Files (x86)\\Jenkins\\workspace\\Job_Jelena_master\"'
      // bat 'docker run --name react-test --rm -v \"C:\\Program Files (x86)\\Jenkins\\workspace\\Job_Jelena_master":/usr/src/app react-test'
      bat 'docker run --name react-test --rm -v /c/test:/usr/src/test react-test'
      
    }
    stage('Clean Docker test'){
       //bat  'docker rmi react-test'
    }
    // stage('Deploy'){
    //   if(env.BRANCH_NAME == 'master'){
    //    // bat  'docker build -t react-app --no-cache .'
    //    // bat  'docker tag react-app localhost:5000/react-app'
    //    // bat  'docker push localhost:5000/react-app'
    //    // bat  'docker rmi -f react-app localhost:5000/react-app'
    //   }
    // }
  }
  catch (err) {
    
    bat 'more "C:\\test\\eslint.xml"'
    throw err
  }
}