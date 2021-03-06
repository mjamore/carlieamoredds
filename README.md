[![Netlify Status](https://api.netlify.com/api/v1/badges/6eb6d45f-5e96-4d3e-bbdd-fb33397cd0c1/deploy-status)](https://app.netlify.com/sites/carlieamoredds/deploys)

# carlieamoredds 
This is the source code for Carlie Amore's dentistry website:
- https://carlieamoredds.gtsb.io/
- https://carlieamoredds.netlify.app/
- carlieamoredds.com
- carlieamoreholisticdds.com
- broadmoorholistidentistry.com

## Run Gatsby Website Locally:
1. Create a .env file at the root of this project with the following entries:
    - `MAILGUN_API_KEY`
    - `EMAIL_T0_ADDRESS`
    - `CONTENTFUL_SPACE_ID`
    - `CONTENTFUL_ACCESS_TOKEN`
    - `GATSBY_CONTENTFUL_OFFLINE=true`
    - `NODE_ENV=development`.
The MAILGUN_API_KEY value can be retrieved from https://app.mailgun.com/app/account/security/.  The Contentful CONTENTFUL_SPACE_ID, and CONTENTFUL_ACCESS_TOKEN can be retrieved from https://app.contentful.com/spaces/73jild2dfrc8/api/keys/7oCbo2CeMg1SBkfBB6gcze.

2.  ```shell
    npm install
    ```

3. ```shell
    npm start
    ```

## Workflow for Developing/Deploying/Testing the Netlify Serverless Function:
In order to send emails to Carlie when the user submits the contact form or the new testimonial form on the website, this application contains two serverless function that are deployed through Netlify and located in the `netlify/functions/` directory - `sendContactFormEmail.js` and `sendNewTestimonialEmail.js`.

1.  Make sure you have a .env file setup, as described in step 1 under the 'Run Gatsby Website Locally section.

2.  ```shell
    netlify dev
    ```

3. You should now be able to invoke the functions locally by hitting these URLs in the browser
- Contact form: http://localhost:{PORT_NUMBER_SPECIFIED_IN_OUTPUT_FROM_NETLIFY_DEV_COMMAND}/.netlify/functions/sendContactFormEmail/?name=Jack%20Jackson&email=paul@aol.com&message=Dr.%20Amore%20began%20prioritizing%20her%20journey
- New testimonial form: http://localhost:{PORT_NUMBER_SPECIFIED_IN_OUTPUT_FROM_NETLIFY_DEV_COMMAND}/.netlify/functions/sendNewTestimonialEmail/?name=Jack%20Jackson&email=paul@aol.com&service=cleaning&testimonial=Dr.%20Amore%20began%20prioritizing%20her%20journey

4.  ```shell
    netlify deploy --prod
    ```

5. You should now be able to invoke the functions on Netlify by hitting these URLs in the browser
- Contact form: https://carlieamoredds.netlify.app/.netlify/functions/sendContactFormEmail/?name=Jack%20Jackson&email=paul@aol.com&message=Dr.%20Amore%20began%20prioritizing%20her%20journey
- New testimonial form: https://carlieamoredds.netlify.app/.netlify/functions/sendNewTestimonialEmail/?name=Jack%20Jackson&email=paul@aol.com&service=cleaning&testimonial=Dr.%20Amore%20began%20prioritizing%20her%20journey

6. The following are ways to test/debug the Nelify functions:
    - You can see the response body in the browser when you hit the endpoints from step 5.
    - You can see the function logs at:
        - https://app.netlify.com/sites/carlieamoredds/functions/sendContactFormEmail
        - https://app.netlify.com/sites/carlieamoredds/functions/sendNewTestimonialEmail
    - The email should show up in the Mailgun user interface dashboard.
    - You should recieve the email at the EMAIL_T0_ADDRESS defined in step 1

## Deployment:
Netlify/Gatsby Cloud is used as a continuous build/deployment server, as well as for hosting the site.  The site is automatically built each time the `main` branch is pushed.

## Postman:
There is Postman collection located at `postman/carlieamoredds.postman_collection.json`, which contains calls to the Contentful API for getting data to power the website.  In order to run the Postman collection, import it into Postman and then create a new environment containing variables for `SPACE_ID` and `ACCESS_TOKEN`, both of which can be obtained from https://app.contentful.com/spaces/73jild2dfrc8/api/keys/7oCbo2CeMg1SBkfBB6gcze.

## Influences:
- https://www.babcockdentistry.com/
- https://thevibrantmarket.com/
- https://www.rejuvdentist.com/
- http://www.laholisticdentistry.com/
- https://www.zaghimd.com/
- https://www.enlightendentalnola.com/
- https://drjabanmoore.com/


## To-Do:
- Customize SEO metadata to each page
- Add google analytics
- Clean up:
    - Image directory
    - Fonts directory
- Sitemap?
- Fix issues identified in Lighthouse reports

## Heart tooth logos:
- https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F29%2F26%2Fcreative-teeth-heart-inside-logo-vector-22372926.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcreative-teeth-heart-inside-logo-vector-22372926&tbnid=dZggBgS5TD0cGM&vet=12ahUKEwi465uwpdLvAhWGT98KHUAFBekQMygIegUIARDYAQ..i&docid=jSD1itavTYTigM&w=1000&h=780&q=heart%20tooth&ved=2ahUKEwi465uwpdLvAhWGT98KHUAFBekQMygIegUIARDYAQ
- https://pixlr.com/e/#editor

## Stars Codepen: https://codepen.io/saransh/pen/BKJun

## Contentful CMS:
Organization: Michael Amore
Spaces: carlieamoredds
Environments: master
Content Types: About Me Section
Content
- Website data: https://cdn.contentful.com/spaces/{{SPACE_ID}}/environments/master/entries?access_token={{ACCESS_TOKEN}}