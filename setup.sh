
# This is the script I kicked off to create the empty app
# and install the npm packages required

# Install npm modules
function install_npm_modules() {
    npm install prop-types
    npm install --save escape-string-regexp sort-by
    npm install --save react-router-dom
    npm install --save form-serialize
}
install_npm_modules

# Build initial blank react app
function bootstrap_myreads_app() {
    create-react-app myreads
}
bootstrap_myreads_app



