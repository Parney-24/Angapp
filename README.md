# Angular Boilerplate

The **Angular Boilerplate** is designed to simplify and enhance the deployment process for Angular.js applications directly on the edge of the network.

This repository is an example of the new GitHub repository created during the deployment. For a more detailed step-by-step to deploy this template via Azion Real-Time Manager (RTM), check the [How to deploy edge applications with the Angular Boilerplate](https://www.azion.com/en/documentation/products/guides/angular-boilerplate/) guide.

This template uses Angular CLI version `16.1.3`.

---

## Deploy Your Own

Deploy your own Angular project with Azion.

[![Deploy Button](/static/button.png)](https://console.azion.com/create/angular/angular-boilerplate "Deploy with Azion")

---

## Usage information

To use this template, you must [sign in on Azion Console](https://console.azion.com/login).

> If you haven't created an account, go to the [signup page](https://console.azion.com/signup) to complete the registration.

To successfully deploy this template, you need to provide the information to configure your Azion application, as requested in the **Settings** tab on the template's page.

For a more detailed step-by-step on using this template and requirements, check the [How to deploy edge applications with the Angular Boilerplate](https://www.azion.com/en/documentation/products/guides/angular-boilerplate/) guide.

### Requirements

- Generate a [GitHub personal token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).
- Enable [Edge Functions](https://www.azion.com/en/documentation/products/guides/billing-and-subscriptions/) on your Azion account.

---

## Continuous deployment

Once the template is deployed, you can edit and update your args and code, as well as implement a continuous deployment workflow. However, you'll need first to *declare secrets on your project's GitHub repository* to complete the second build with the changes. When the second build is completed, you'll be able to manage your project with a continuous deployment workflow and edit the args as desired.

To do so, open your repository in GitHub. Then, go to **Settings** > **Secrets and variables** > **Action** to [add your variables](https://docs.github.com/en/actions/security-guides/encrypted-secrets), following these instructions:

1. Add the Azion personal token to the *secrets*:
- Read [how to generate an Azion personal token](https://www.azion.com/en/documentation/products/accounts/personal-tokens/) in the documentation.

```bash
    AZION_PERSONAL_TOKEN=<value>
```

2. Add the environments for use in the action workflow in the **main.yml** file, included in the **.github/workflows** folder of your repository:

```yml
  - name: edge-...
    id: azion_edge
    ...
    with:
        ....
        azionPersonalToken: ${{ secrets.AZION_PERSONAL_TOKEN }}
        ....

```

3. Open a pull request to merge the changes to the main branch and start the automatic deployment.

Now your project is ready to work with a continuous deployment workflow, updating instantly any changes in the application or the repository. 

---

## Management

Considering that this initial setup may not be optimal for your specific edge application, all settings can be customized any time you need by using [Azion Console](https://console.azion.com/).

To manage and edit your edge application’s settings, read the documentation about [managing edge applications](https://www.azion.com/en/documentation/products/edge-application/first-steps/) for more details.

### Custom domain

The edge application created during the deployment has an assigned Azion domain to make it accessible through the browser. The domain has the following format: `xxxxxxxxxx.map.azionedge.net`. However, you can add a custom domain for users to access your edge application through it. Go to the [Domains](https://www.azion.com/en/documentation/products/guides/configure-a-domain/) documentation to read more about it.

