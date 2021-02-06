pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run-Tests') {
      steps {
        bat 'npm test'
      }
    }

    stage('Generate-Report') {
      steps {
        bat 'npm run allure-report'
      }
    }

  }
}