## Notes for Reviewers

Configuring `.env` is required before starting/building this app. There is test data available in `public/testdata.json` that can be used in lieu of API calls, but this data is severely limited. A template with directions is included in the root directory.

There were a lot of considerations that had to be made to compensate for the way alphavantage returns data and errors. All of that is done in `data/api.js`. The data in `public/testdata.json` reflects the post-processed version of the data so we didn't have to do any transforms on it.

The idea here was to not do any data transformation in the views, so it all ended up in the API methods. Unless I missed something, views should just be views with a little bit of promise resolution logic to handle displaying errors returned by the API methods. 

The request limit of the API partially dictated the limited information of the details display. The other part is that I'm not really a stock market person, so I didn't really know what data is relevant to a user in this situation.

The interface is, admittedly, a little plain. But I did try to do some common things like conditional styling and modifying a bootstrap component to do something neat. It should be responsive and work on Chrome, Firefox (Windows 10, Ubuntu) and Edge. I don't have a Mac to test on at home, but I feel it's pretty safe to assume it works on Safari.

## Known issues

Using enter to confirm a search doesn't fire a search
* This is a byproduct of the autocomplete library [react-bootstrap-typeahead](https://github.com/ericgio/react-bootstrap-typeahead) not counting the enter key as a first class use case. I wish I had realized this earlier on in development, but by the time I had I was almost complete with the project. 

No testing support
* I would have liked to include some tests, but in the interest of time I decided it was better to focus more on the app itself.

## Final notes

This was a pretty fun thing to put together. I had some issues in places I didn't think I would, and had few issues in places I thought would give me problems.

I hope you enjoy looking the project over, and I look forward to talking with you in the future.

-Karel

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
