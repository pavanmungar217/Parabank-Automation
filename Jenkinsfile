pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select the browser to run the tests'
        )
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/pavanmungar217/Parabank-Automation.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat "set BROWSER=${params.BROWSER} && npx playwright test --reporter=html --project=${BROWSER}"
            }
        }

        stage('Publish Playwright Report') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'View report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
