// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: axios } = require('axios');
// Create an instance of Express
const app = express();

// Middleware for CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Route for handling GET requests
app.get('/api/data', (req, res) => {
    res.json({ message: 'GET request received!' });
});

// Another route for handling GET requests with parameters
app.get('/prodConfig', (req, res) => {
    const launchpadPackageConfig = {
        "activation-products-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/activation-products-module/1.4.0-alpha+8002eb1c-7f14-42be-9400-1cf74f3d129b/activation-products-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/activation-products-module/1.4.0-alpha+8002eb1c-7f14-42be-9400-1cf74f3d129b/activation-products-module.js"
        ],
        "affected-devices-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/affected-devices-pod/1.5.0/affected-devices-pod.js"
        ],
        "affected-user-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/affected-user-pod/1.5.0/affected-user-pod.js"
        ],
        "agent-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agent-common-components/2.0.0-alpha+65ce42f5-328a-45f5-992b-fb51bbe48a59/agent-common-components.js"
        ],
        "agreement-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agreement-management-common-service/1.0.0-alpha+jJ-whLq4r8zy63qgGRjbGUhyvGQ-/agreement-management-common-service.js"
        ],
        "agreement-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agreement-management-module/2.1.0-alpha+d15edf75-6d31-41f8-aaa1-44dd9280f18c/agreement-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agreement-management-module/2.1.0-alpha+d15edf75-6d31-41f8-aaa1-44dd9280f18c/agreement-management-module.js"
        ],
        "agreement-psa-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agreement-psa-module/1.0.1-alpha+9385337b-388c-4de6-bbe5-f73518e14255/agreement-psa-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/agreement-psa-module/1.0.1-alpha+9385337b-388c-4de6-bbe5-f73518e14255/agreement-psa-module.js"
        ],
        "alert-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/alert-common-components/8.9.0-alpha+0cfb9cd3-5605-4167-b903-51f35ec26a2c/alert-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/alert-common-components/8.9.0-alpha+0cfb9cd3-5605-4167-b903-51f35ec26a2c/alert-common-components.js"
        ],
        "alert-management-common-components": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/alert-management-common-components/1.1.0-alpha.30/alert-management-common-components.css",
            "https://static.itsupport247.net/platform-launchpad-ui-v2/alert-management-common-components/1.1.0-alpha.30/alert-management-common-components.js"
        ],
        "alert-management-module": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/alert-management-module/1.0.2-alpha.109/alert-management-module.css",
            "https://static.itsupport247.net/platform-launchpad-ui-v2/alert-management-module/1.0.2-alpha.109/alert-management-module.js"
        ],
        "alert-management-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/alert-management-service/1.0.2-alpha.103/alert-management-service.js"
        ],
        "alert-suspension-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/alert-suspension-common-service/7.8.0-alpha+9b68a9e0-4c17-44bb-b80b-cbbfbf061258/alert-suspension-common-service.js"
        ],
        "alert-suspension-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/alert-suspension-module/8.8.0-alpha+346c901a-399c-4ddb-81b8-28330a9652d4/alert-suspension-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/alert-suspension-module/8.8.0-alpha+346c901a-399c-4ddb-81b8-28330a9652d4/alert-suspension-module.js"
        ],
        "app-container-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/app-container-ui/2.2.0-alpha+55713c21-e910-489b-8773-16c69a8446d1/app-container-ui.js"
        ],
        "application-updates": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/application-updates/1.1.0-alpha+976d8005-ca35-4743-a9ee-08ba7aa294df/application-updates.js"
        ],
        "asio-email-connector-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/asio-email-connector-common-service/1.0.0-alpha+1bca64aa-fae0-4adc-a7db-5592cc899271/asio-email-connector-common-service.js"
        ],
        "asio-email-connector-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/asio-email-connector-module/1.0.0-alpha+2045a0c2-2e29-4ebc-837b-ae268cf159b9/asio-email-connector-module.js"
        ],
        "assessment-utility-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/assessment-utility-module/3.4.0-alpha+3ff0d0fa-9272-44a0-adb6-f7dff45e250d/assessment-utility-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/assessment-utility-module/3.4.0-alpha+3ff0d0fa-9272-44a0-adb6-f7dff45e250d/assessment-utility-module.js"
        ],
        "assignments-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/assignments-module/1.0.0-alpha+fc1052f8-9505-4b3c-b9e9-8277f30fdecd/assignments-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/assignments-module/1.0.0-alpha+fc1052f8-9505-4b3c-b9e9-8277f30fdecd/assignments-module.js"
        ],
        "async-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/async-common-components/1.0.0-alpha+0ac897d6-875e-491d-bc0f-b36972e38587/async-common-components.js"
        ],
        "attachment-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/attachment-common-service/1.0.0-alpha+dLa959DybJXkpEzAOd-1H77II0o-/attachment-common-service.js"
        ],
        "attachment-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/attachment-module/1.0.0-alpha+--C-ECAp58lW-u4dOXhcnejnwQw-/attachment-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/attachment-module/1.0.0-alpha+--C-ECAp58lW-u4dOXhcnejnwQw-/attachment-module.js"
        ],
        "audit-management": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/audit-management/1.0.0-alpha+09dc966f-6014-48d7-a4d6-222daaf6f3db/audit-management.js"
        ],
        "audit-management-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/audit-management-pod/2.0.0/audit-management-pod.js"
        ],
        "automate-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/automate-module/1.0.0-alpha+6b44f6d0-b258-46b4-b856-b858b7a40acf/automate-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/automate-module/1.0.0-alpha+6b44f6d0-b258-46b4-b856-b858b7a40acf/automate-module.js"
        ],
        "automation-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/automation-common-components/3.4.0/automation-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/automation-common-components/3.4.0/automation-common-components.js"
        ],
        "automation-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/automation-common-service/3.4.0/automation-common-service.js"
        ],
        "autotriage-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/autotriage-management-common-service/3.0.0-alpha+355970e8-e165-4731-a524-af8fd5746fc6/autotriage-management-common-service.js"
        ],
        "autotriage-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/autotriage-management-module/3.0.0-alpha+59ad3f50-9a36-43f6-8b26-225f22f2ce0a/autotriage-management-module.js"
        ],
        "backup-dashboard-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/backup-dashboard-module/3.9.1-alpha+89693c31-d0ec-4b5c-8372-573ceb9eeba4/backup-dashboard-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/backup-dashboard-module/3.9.1-alpha+89693c31-d0ec-4b5c-8372-573ceb9eeba4/backup-dashboard-module.js"
        ],
        "backup-integrations-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/backup-integrations-module/3.7.0-alpha+3e4d564a-2d0f-4741-aa7f-5449ee7cb5cb/backup-integrations-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/backup-integrations-module/3.7.0-alpha+3e4d564a-2d0f-4741-aa7f-5449ee7cb5cb/backup-integrations-module.js"
        ],
        "bdr-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/bdr-common-components/2.3.0-alpha+d678c2e5-574f-4035-97fb-b062d36368cd/bdr-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/bdr-common-components/2.3.0-alpha+d678c2e5-574f-4035-97fb-b062d36368cd/bdr-common-components.js"
        ],
        "bdr-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/bdr-common-service/1.2.0-alpha+b71cd0c7-bbd9-4b69-b009-e5cec03de99f/bdr-common-service.js"
        ],
        "bg-pods-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/bg-pods-module/1.0.0-alpha+a94c7e5d-2b3c-40e4-9391-6a878ff1a774/bg-pods-module.js"
        ],
        "bgs-listing": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/bgs-listing/1.0.0-alpha+3469d5ba-9c55-428d-bd71-60e39dcd8162/bgs-listing.js"
        ],
        "brightgauge-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/brightgauge-ui/1.0.0-alpha+i-WIcUrDoLUMGUzWtCeFxuSXIqA-/brightgauge-ui.js"
        ],
        "catalog-admin-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/catalog-admin-module/1.1.0-alpha+64025760-1b27-4874-bf71-073f6f1c4828/catalog-admin-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/catalog-admin-module/1.1.0-alpha+64025760-1b27-4874-bf71-073f6f1c4828/catalog-admin-module.js"
        ],
        "ces-common-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ces-common-module/1.7.4-alpha+b0a6a09d-c79e-4f36-b745-ce8db3b94c57/ces-common-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ces-common-module/1.7.4-alpha+b0a6a09d-c79e-4f36-b745-ce8db3b94c57/ces-common-module.js"
        ],
        "client-portal-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/client-portal-module/2.0.0-alpha+5d5d6997-245c-4c45-9bab-db278dd336c9/client-portal-module.js"
        ],
        "cloud-devices": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/cloud-devices/2.7.0-alpha+1f98ad3e-877d-4339-b978-a48311a7ee30/cloud-devices.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/cloud-devices/2.7.0-alpha+1f98ad3e-877d-4339-b978-a48311a7ee30/cloud-devices.js"
        ],
        "cloud-monitoring-common-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/cloud-monitoring-common-service/1.0.1-alpha.239/cloud-monitoring-common-service.js"
        ],
        "cloud-monitoring-module": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/cloud-monitoring-module/1.0.1-alpha.262/cloud-monitoring-module.css",
            "https://static.itsupport247.net/platform-launchpad-ui-v2/cloud-monitoring-module/1.0.1-alpha.262/cloud-monitoring-module.js"
        ],
        "communicator-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/communicator-common-components/4.3.0-alpha+3c9a1758-64e2-46e1-a53e-e3a1c1e76c19/communicator-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/communicator-common-components/4.3.0-alpha+3c9a1758-64e2-46e1-a53e-e3a1c1e76c19/communicator-common-components.js"
        ],
        "communicator-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/communicator-common-service/3.2.0-alpha+2b9f7b51-a9d1-47db-8f6b-7cecfa107a94/communicator-common-service.js"
        ],
        "communicator-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/communicator-module/4.2.0-alpha+11631d9b-09a3-42f2-b603-7d1a101c9cc2/communicator-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/communicator-module/4.2.0-alpha+11631d9b-09a3-42f2-b603-7d1a101c9cc2/communicator-module.js"
        ],
        "community-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/community-module/1.0.0-alpha+33bd1f2d-dd42-4c4d-b483-8e2f45e672f5/community-module.js"
        ],
        "company-finance-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/company-finance-module/0.0.1-alpha+5af86468-37f9-4bf3-93ba-557b265e4a28/company-finance-module.js"
        ],
        "company-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/company-management-common-service/8.9.0-alpha+773616d9-4a35-45a4-bb20-28b65e865b04/company-management-common-service.js"
        ],
        "company-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/company-management-module/8.15.0-alpha+c2273c03-5137-40e3-9f7a-9d6d8bb96db6/company-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/company-management-module/8.15.0-alpha+c2273c03-5137-40e3-9f7a-9d6d8bb96db6/company-management-module.js"
        ],
        "company-overview-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/company-overview-module/1.0.0-alpha+bAcmj6GW0ABMUl7y1xGuNSCfryY-/company-overview-module.js"
        ],
        "compile-time": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/compile-time/2.5.0/compile-time.js"
        ],
        "configuration-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/configuration-management-module/2.5.0-alpha+f98a1dee-1a45-4f7e-b537-3346e054d015/configuration-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/configuration-management-module/2.5.0-alpha+f98a1dee-1a45-4f7e-b537-3346e054d015/configuration-management-module.js"
        ],
        "contact-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/contact-management-module/5.9.0-alpha+97b7e701-e835-4a01-be70-98b0c34793b6/contact-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/contact-management-module/5.9.0-alpha+97b7e701-e835-4a01-be70-98b0c34793b6/contact-management-module.js"
        ],
        "corporate-structure-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/corporate-structure-common-service/1.0.0-alpha+1eba41ca-983c-41e9-b6e4-8a48871f986a/corporate-structure-common-service.js"
        ],
        "corporate-structure-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/corporate-structure-module/1.0.0-alpha+8f5b57dd-07d5-4239-9ef4-611a7267780f/corporate-structure-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/corporate-structure-module/1.0.0-alpha+8f5b57dd-07d5-4239-9ef4-611a7267780f/corporate-structure-module.js"
        ],
        "custom-automation-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-automation-common-components/1.10.0-alpha+ef13133b-119c-4bb0-917f-469706d690c1/custom-automation-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-automation-common-components/1.10.0-alpha+ef13133b-119c-4bb0-917f-469706d690c1/custom-automation-common-components.js"
        ],
        "custom-catalog-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-catalog-module/1.2.0-alpha+67790477-d581-4b01-85b8-72c178760de3/custom-catalog-module.js"
        ],
        "custom-catalog-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-catalog-service/1.0.0-alpha+V-4dSy7VpQkbGaIiIjgzMIDGK1E-/custom-catalog-service.js"
        ],
        "custom-monitors-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-monitors-module/5.10.0/custom-monitors-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-monitors-module/5.10.0/custom-monitors-module.js"
        ],
        "custom-monitors-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/custom-monitors-service/4.8.0-alpha+ce526c00-132b-4907-8f47-486389bf1020/custom-monitors-service.js"
        ],
        "cw-basic-quote-ui-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/cw-basic-quote-ui-module/4.1.0-alpha+6baf3b03-4aa3-4dca-a57a-5e9a67baf75f/cw-basic-quote-ui-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/cw-basic-quote-ui-module/4.1.0-alpha+6baf3b03-4aa3-4dca-a57a-5e9a67baf75f/cw-basic-quote-ui-module.js"
        ],
        "cw-test": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/cw-test/1.0.0-alpha+aDW0EWd7CKa-slRNFj4VTx3N5N4-/cw-test.js"
        ],
        "dashboard-banner-coming-soon-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/dashboard-banner-coming-soon-module/3.0.2-alpha+5efee4ed-39ef-4204-8df8-46d8be092a3a/dashboard-banner-coming-soon-module.js"
        ],
        "device-groups-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/device-groups-common-components/2.6.0-alpha+5528a47b-d26f-4854-add7-b8e903c15d75/device-groups-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/device-groups-common-components/2.6.0-alpha+5528a47b-d26f-4854-add7-b8e903c15d75/device-groups-common-components.js"
        ],
        "device-groups-legacy-components": [
            "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js",
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/platform-common-vendor.css",
            "https://static.itsupport247.net/platform-common-ui/3.2.82/platform-common-ui.css",
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/vendor-essentials.js",
            "https://static.itsupport247.net/platform-common-ui/3.2.82/platform-common-ui.js"
        ],
        "device-groups-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/device-groups-module/4.7.0-alpha+754b0cbd-d640-49d8-bf4c-061b325ba146/device-groups-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/device-groups-module/4.7.0-alpha+754b0cbd-d640-49d8-bf4c-061b325ba146/device-groups-module.js"
        ],
        "device-groups-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/device-groups-service/3.9.0-alpha+3c72acdc-18f0-453d-8e34-abc8600ac270/device-groups-service.js"
        ],
        "devices-availability-desktop": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-availability-desktop/1.2.0-alpha+9520a322-ed90-4283-ae5a-fc77ba76c6cb/devices-availability-desktop.js"
        ],
        "devices-availability-server": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-availability-server/1.2.0-alpha+73432843-cea4-4f44-ba74-fb580472a052/devices-availability-server.js"
        ],
        "devices-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-common-service/7.0.5-alpha+45111e5e-23ca-4ebd-896d-43cd6b106b39/devices-common-service.js"
        ],
        "devices-dashboard-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-dashboard-module/1.25.1-alpha+27792f95-52d8-4133-9e4c-08d87e773dba/devices-dashboard-module.js"
        ],
        "devices-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-module/9.14.0-alpha+14c24582-adad-42b4-ba37-afeb5c277acf/devices-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/devices-module/9.14.0-alpha+14c24582-adad-42b4-ba37-afeb5c277acf/devices-module.js"
        ],
        "documentation-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-common-service/1.6.0-alpha+4UrU-7B89l5CeOwUFe9QNEMkqkk-/documentation-common-service.js"
        ],
        "documentation-discovery": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-discovery/1.5.0-alpha+Pv0C5SzdPfqYLGMMKDb-65HKPEg-/documentation-discovery.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-discovery/1.5.0-alpha+Pv0C5SzdPfqYLGMMKDb-65HKPEg-/documentation-discovery.js"
        ],
        "documentation-link-assets": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-link-assets/2.3.0-alpha+ZQdePnf8Y-7nObnvVAOJkMFv8oo-/documentation-link-assets.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-link-assets/2.3.0-alpha+ZQdePnf8Y-7nObnvVAOJkMFv8oo-/documentation-link-assets.js"
        ],
        "documentation-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-service/2.4.0-alpha+rkeFJoYbWNB2Mj4U0J8qlgBE36I-/documentation-service.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/documentation-service/2.4.0-alpha+rkeFJoYbWNB2Mj4U0J8qlgBE36I-/documentation-service.js"
        ],
        "email-connector-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/email-connector-module/1.0.1-alpha+bb00e831-fc42-4619-947e-1b0da4b8f641/email-connector-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/email-connector-module/1.0.1-alpha+bb00e831-fc42-4619-947e-1b0da4b8f641/email-connector-module.js"
        ],
        "endpoint-integrations-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/endpoint-integrations-module/2.4.0-alpha+3ed915d5-9824-4b6e-8eff-864b17c2aa2a/endpoint-integrations-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/endpoint-integrations-module/2.4.0-alpha+3ed915d5-9824-4b6e-8eff-864b17c2aa2a/endpoint-integrations-module.js"
        ],
        "endpoint-protection": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/endpoint-protection/1.1.0-alpha+7bab40de-d67a-4b9b-8bf6-4c14e2547808/endpoint-protection.js"
        ],
        "eslint-config-cw": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/eslint-config-cw/3.1.1-alpha+CkH5tfeEMSOhpd-WAfDDeLry690-/index.js"
        ],
        "extended-attributes-details": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extended-attributes-details/1.2.0/extended-attributes-details.js"
        ],
        "extensibility-api-access-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-api-access-module/1.2.4-alpha+ad27eaec-8cfc-4d04-a40c-5b92de6cdf99/extensibility-api-access-module.js"
        ],
        "extensibility-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-common-components/27.5.4-alpha+4dfa1af8-3d23-47ac-bde0-f511bbb06231/extensibility-common-components.js"
        ],
        "extensibility-mock-extensions": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-mock-extensions/1.0.0-alpha+5f6694bb-7bdd-4431-80cf-1d92d1b9a21c/extensibility-mock-extensions.js"
        ],
        "extensibility-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-module/17.2.4-alpha+aac7150f-7bd3-4811-bf6a-ead3e0ca2b3c/extensibility-module.js"
        ],
        "extensibility-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-service/23.1.4-alpha+143a44d9-f324-4330-971a-395e75c4f59a/extensibility-service.js"
        ],
        "extensibility-standalone-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-standalone-module/2.0.9-alpha+40aa6476-c5cd-4729-8077-3ea8efdc57d6/extensibility-standalone-module.js"
        ],
        "extensibility-test-utils": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/extensibility-test-utils/1.0.0-alpha+51163f60-9646-4ca5-98d0-093ba0d403ea/extensibility-test-utils.js"
        ],
        "facade-ui-portal-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/facade-ui-portal-module/1.0.0-alpha+9a536421-140b-4c5b-b924-fd2b4bb8f2b2/facade-ui-portal-module.js"
        ],
        "form-builder-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/form-builder-common-components/0.0.0-alpha+d4bc5ae9-7808-4dcc-84c5-2a7a5b0263bf/form-builder-common-components.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/form-builder-common-components/0.0.0-alpha+d4bc5ae9-7808-4dcc-84c5-2a7a5b0263bf/form-builder-common-components.umd.cjs"
        ],
        "form-builder-common-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/workflow-common-components/2.25.0/workflow-common-components.css"
        ],
        "form-builder-core": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/form-builder-core/0.0.0-alpha+aee1cf86-ee37-44fc-8997-4c0821ed7cc6/form-builder-core.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/form-builder-core/0.0.0-alpha+aee1cf86-ee37-44fc-8997-4c0821ed7cc6/form-builder-core.umd.cjs"
        ],
        "form-builder-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/form-builder-module/2.5.0-alpha+1cce2cc3-6e75-48b5-8858-efc58be10ee5/form-builder-module.js"
        ],
        "franchisee-management": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/franchisee-management/2.2.0-alpha+95b581f4-9725-417f-886b-a84eaef28bf6/franchisee-management.js"
        ],
        "franchisee-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/franchisee-management-common-service/1.0.0-alpha+5f761235-7331-4062-a76c-caac40ba06f9/franchisee-management-common-service.js"
        ],
        "franchisee-management-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/franchisee-management-service/2.2.0-alpha+16091434-0af7-4f10-9155-50b689cae552/franchisee-management-service.js"
        ],
        "franchisee-management-store": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/franchisee-management-store/2.2.0-alpha+0de06d28-1d23-4583-b17c-da3e5a8fc150/franchisee-management-store.js"
        ],
        "gateway-cache-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/gateway-cache-components/1.0.0-alpha+98e30bf2-212a-4cc8-8b52-b225c2c5243e/gateway-cache-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/gateway-cache-components/1.0.0-alpha+98e30bf2-212a-4cc8-8b52-b225c2c5243e/gateway-cache-components.js"
        ],
        "gateway-cache-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/gateway-cache-service/1.0.0-alpha+5f86f4f7-6c09-478c-b3eb-44606860469a/gateway-cache-service.js"
        ],
        "gauges": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/gauges/1.9.1-alpha+01e196c1-454b-49a2-b7a5-6b40fecbfa13/gauges.js"
        ],
        "gl-account-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/gl-account-module/3.0.1-alpha+56e87a57-b044-4ee5-9fde-c77d9a1a6dee/gl-account-module.js"
        ],
        "global-filters-module": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/global-filters-module/1.0.0-alpha.73/global-filters-module.css",
            "https://static.itsupport247.net/platform-launchpad-ui-v2/global-filters-module/1.0.0-alpha.73/global-filters-module.js"
        ],
        "global-search": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/global-search/1.0.0-alpha+3f3e75e9-de92-4753-8f3d-8879ee7d65a7/global-search.js"
        ],
        "global-search-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/global-search-module/4.5.0/global-search-module.js"
        ],
        "graph-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/graph-common-components/6.4.0/graph-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/graph-common-components/6.4.0/graph-common-components.js"
        ],
        "grids-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/grids-module/2.19.0-alpha+d249a578-ba49-46c6-8169-d01c903ceddb/grids-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/grids-module/2.19.0-alpha+d249a578-ba49-46c6-8169-d01c903ceddb/grids-module.js"
        ],
        "hds-quick-actions": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/hds-quick-actions/1.2.0/hds-quick-actions.js"
        ],
        "hello-world": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/hello-world/1.0.0-alpha+d40dbbbe-fe49-4015-b913-40df81e70eb1/hello-world.js"
        ],
        "home-dashboard-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/home-dashboard-module/4.1.2-alpha+5f3e2b21-4f2c-43a5-bcac-ff5da427b573/home-dashboard-module.js"
        ],
        "integrations-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/integrations-module/27.2.4-alpha+b95fbd0b-3923-4964-ae6c-f06103999254/integrations-module.js"
        ],
        "integrations-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/integrations-service/9.0.0/integrations-service.js"
        ],
        "internal-catalog-admin-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/internal-catalog-admin-module/2.1.0-alpha+378ef91f-715f-4ab8-887e-3830469caba7/internal-catalog-admin-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/internal-catalog-admin-module/2.1.0-alpha+378ef91f-715f-4ab8-887e-3830469caba7/internal-catalog-admin-module.js"
        ],
        "intune-integration-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/intune-integration-components/1.2.0-alpha+991211f7-c841-44a4-897b-e300747e458f/intune-integration-components.js"
        ],
        "invoice-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/invoice-management-common-service/5.0.0-alpha+16ed88ea-c8da-46c0-8f0b-baf4890ee73b/invoice-management-common-service.js"
        ],
        "invoice-search-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/invoice-search-module/5.0.1-alpha+b8e895f1-7712-419e-82c5-e1ce770b765c/invoice-search-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/invoice-search-module/5.0.1-alpha+b8e895f1-7712-419e-82c5-e1ce770b765c/invoice-search-module.js"
        ],
        "invoicing-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/invoicing-module/5.0.1-alpha+94a622e4-630f-4f67-a084-9d72f3706373/invoicing-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/invoicing-module/5.0.1-alpha+94a622e4-630f-4f67-a084-9d72f3706373/invoicing-module.js"
        ],
        "ipallowedlist-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ipallowedlist-management-common-service/1.2.1-alpha+2f49cba3-2e71-4f5b-8f8c-a08622ecb048/ipallowedlist-management-common-service.js"
        ],
        "ipallowedlist-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ipallowedlist-management-module/1.3.1-alpha+596ac9d0-6f5b-412c-98bf-d172e44ef418/ipallowedlist-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ipallowedlist-management-module/1.3.1-alpha+596ac9d0-6f5b-412c-98bf-d172e44ef418/ipallowedlist-management-module.js"
        ],
        "layout-builder": [],
        "layout-builder-playground": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/layout-builder-playground/0.0.1-alpha+b3bcf209-233f-4e7e-b83f-3c33c6efe780/layout-builder-playground.js"
        ],
        "layout-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/layout-common-components/1.0.0-alpha+b4a9c69b-3e52-4bf8-99ea-bcbf9f776b01/layout-common-components.js"
        ],
        "layout-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/layout-common-service/2.6.0-alpha+c34580a7-09d2-4446-81a1-f87adbb265af/layout-common-service.js"
        ],
        "layout-service-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/layout-service-module/2.4.0-alpha+93558e46-3fb0-405c-98c1-b1842c3563fa/layout-service-module.js"
        ],
        "layout-service-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/layout-service-ui/1.0.0-alpha+c3fcedbc-9fc4-4292-929d-b0698dbd3284/layout-service-ui.js"
        ],
        "manage-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/manage-common-components/2.1.0-alpha+66be4b37-f76d-4cbf-bf45-2e2d0019aea3/manage-common-components.js"
        ],
        "manufacturers-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/manufacturers-module/1.0.0-alpha+9WrPi6j0Xbck54qoT8dc8-aTvVQ-/manufacturers-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/manufacturers-module/1.0.0-alpha+9WrPi6j0Xbck54qoT8dc8-aTvVQ-/manufacturers-module.js"
        ],
        "manufacturers-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/manufacturers-service/1.0.0-alpha+jRR4TaeGJwNAelRWdbOQItrNmXY-/manufacturers-service.js"
        ],
        "mapper-service-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/mapper-service-module/1.1.0-alpha+b42f5c37-848d-4e62-b3e8-4447153792df/mapper-service-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/mapper-service-module/1.1.0-alpha+b42f5c37-848d-4e62-b3e8-4447153792df/mapper-service-module.js"
        ],
        "master-product-catalog-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/master-product-catalog-module/1.0.0-alpha+Gru3W6OsN64e88AlgqcFsj30dDE-/master-product-catalog-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/master-product-catalog-module/1.0.0-alpha+Gru3W6OsN64e88AlgqcFsj30dDE-/master-product-catalog-module.js"
        ],
        "master-product-catalog-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/master-product-catalog-service/1.0.0-alpha+B-amNwkoVkcdaPs1fnBmbqFCTtI-/master-product-catalog-service.js"
        ],
        "mdr-value-report-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/mdr-value-report-module/2.4.0-alpha+ba46eed7-e81b-467c-886b-70cbffbe5a1c/mdr-value-report-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/mdr-value-report-module/2.4.0-alpha+ba46eed7-e81b-467c-886b-70cbffbe5a1c/mdr-value-report-module.js"
        ],
        "microsoft365-authorization": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/microsoft365-authorization/1.0.0-alpha+0GxvfBGkVRCxQEAJRgayZDfGfLc-/microsoft365-authorization.js"
        ],
        "microsoft365-authorization-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/microsoft365-authorization-module/1.0.0-alpha+poAh-Oi-ks0dmEXhwrg-lAxM3SY-/microsoft365-authorization-module.js"
        ],
        "migration-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/migration-module/3.1.0-alpha+d7702754-9d11-4f00-83e0-5aacee18b50c/migration-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/migration-module/3.1.0-alpha+d7702754-9d11-4f00-83e0-5aacee18b50c/migration-module.js"
        ],
        "migration-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/migration-service/3.1.0-alpha+71660cab-074e-449b-bf7c-0a189e3fb940/migration-service.js"
        ],
        "navigation-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/navigation-common-components/2.2.0-alpha+435aea7e-926a-4252-85d0-30e595e4bffb/navigation-common-components.js"
        ],
        "navigation-routes-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/navigation-routes-service/3.7.0-alpha+53288019-252f-4053-af26-03394eea7a68/navigation-routes-service.js"
        ],
        "navigation-service-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/navigation-service-ui/3.4.0-alpha+e4fab290-16c0-40b4-b8f3-07decff44b6e/navigation-service-ui.js"
        ],
        "network-devices": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/network-devices/1.18.0-alpha+2fa9a1b0-813a-4fed-826a-1fff2ab659a5/network-devices.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/network-devices/1.18.0-alpha+2fa9a1b0-813a-4fed-826a-1fff2ab659a5/network-devices.js"
        ],
        "nms-configuration": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/nms-configuration/1.5.0-alpha+2334dc2d-eaac-4508-b92e-0a7a8dc23150/nms-configuration.js"
        ],
        "noc-automation-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/noc-automation-pod/1.1.0/noc-automation-pod.js"
        ],
        "notes-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notes-common-service/11.19.0-alpha+9d9dd21c-2ae7-4d15-a82a-c52d93935907/notes-common-service.js"
        ],
        "notes-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notes-module/11.19.0-alpha+f7f05ca8-cbe0-4acc-873a-dce5654411e2/6d7943556cc908aaefee610ef2a759f5.svg",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notes-module/11.19.0-alpha+f7f05ca8-cbe0-4acc-873a-dce5654411e2/notes-module.js"
        ],
        "notification-center-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notification-center-module/1.0.0-alpha+fe2d2914-c7f2-4672-b701-4afc2ae0f1ec/notification-center-module.js"
        ],
        "notification-rules-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notification-rules-common-components/2.8.1-alpha+a6220f1b-3392-4837-a3cb-050069bb678b/notification-rules-common-components.js"
        ],
        "notification-rules-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notification-rules-module/6.1.1-alpha+d4619455-80b5-4dbd-89d8-ecc58b7a99b8/notification-rules-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notification-rules-module/6.1.1-alpha+d4619455-80b5-4dbd-89d8-ecc58b7a99b8/notification-rules-module.js"
        ],
        "notification-rules-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/notification-rules-service/5.1.1-alpha+b322010c-c78a-4838-8dea-d76de57b8cb2/notification-rules-service.js"
        ],
        "office365-email-setup-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/office365-email-setup-module/1.0.1-alpha+e5edc6b4-b546-4e3a-aa3b-e40f853a8452/office365-email-setup-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/office365-email-setup-module/1.0.1-alpha+e5edc6b4-b546-4e3a-aa3b-e40f853a8452/office365-email-setup-module.js"
        ],
        "open-vulnerability-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/open-vulnerability-module/3.9.0-alpha+99ad378d-5948-4a96-ba62-ec47d3dc2524/open-vulnerability-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/open-vulnerability-module/3.9.0-alpha+99ad378d-5948-4a96-ba62-ec47d3dc2524/open-vulnerability-module.js"
        ],
        "os-end-of-support": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/os-end-of-support/1.1.0-alpha+44f3b81c-c2df-4d9b-b0ab-0fd7a639b6a1/os-end-of-support.js"
        ],
        "os-patching-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/os-patching-common-components/10.1.0/os-patching-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/os-patching-common-components/10.1.0/os-patching-common-components.js"
        ],
        "os-patching-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/os-patching-common-service/12.1.0-alpha+a7844341-4deb-4025-a722-1db32ee88526/os-patching-common-service.js"
        ],
        "os-patching-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/os-patching-module/1.0.0-alpha+7aeb6026-fd5a-4a47-a2cd-b065cc6c685b/os-patching-module.js"
        ],
        "packages-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/packages-module/1.14.0-alpha+92a533c8-357e-4885-9406-a9885ca7ba27/packages-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/packages-module/1.14.0-alpha+92a533c8-357e-4885-9406-a9885ca7ba27/packages-module.js"
        ],
        "page-level-search-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/page-level-search-components/1.2.0-alpha+743b5ca0-e752-42a4-8a43-b735034feee3/page-level-search-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/page-level-search-components/1.2.0-alpha+743b5ca0-e752-42a4-8a43-b735034feee3/page-level-search-components.js"
        ],
        "patch-approvals-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/patch-approvals-module/12.1.0-alpha+416273ee-633d-4188-851f-3ebea9a7e48b/patch-approvals-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/patch-approvals-module/12.1.0-alpha+416273ee-633d-4188-851f-3ebea9a7e48b/patch-approvals-module.js"
        ],
        "patching-compliance-desktop": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/patching-compliance-desktop/1.2.0-alpha+cc910fb8-b6e9-4ad5-b210-9b61c3f2c48a/patching-compliance-desktop.js"
        ],
        "patching-compliance-server": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/patching-compliance-server/1.1.0-alpha+4ab35c44-8763-4b5c-8640-842e04eaf726/patching-compliance-server.js"
        ],
        "platform-asio-theme-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-asio-theme-service/2.4.0-alpha+918bd5c8-30de-41f1-91f9-6f80b50af619/platform-asio-theme-service.js"
        ],
        "platform-common-assets-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-assets-ui/1.1.0-alpha+e41a46f5-2021-4f29-a54c-6f7a6acd6850/platform-common-assets-ui.js"
        ],
        "platform-common-components-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-components-ui/1.2.0-alpha+cff2bbd9-4cc6-4b6b-b034-6135f5e1a2a0/platform-common-components-ui.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-components-ui/1.2.0-alpha+cff2bbd9-4cc6-4b6b-b034-6135f5e1a2a0/platform-common-components-ui.js"
        ],
        "platform-common-form": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-form/1.1.1-alpha+9deaef35-3d25-45c0-ab61-0da85b57e8d1/platform-common-form.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-form/1.1.1-alpha+9deaef35-3d25-45c0-ab61-0da85b57e8d1/platform-common-form.js"
        ],
        "platform-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-service/4.6.0-alpha+515dee0a-f30f-4dbe-8619-d5603cdd9177/platform-common-service.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-service/4.6.0-alpha+515dee0a-f30f-4dbe-8619-d5603cdd9177/platform-common-service.js"
        ],
        "platform-common-utils": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-common-utils/1.5.1-alpha+03993631-873a-4ca9-989e-7d283088a68f/platform-common-utils.js"
        ],
        "platform-common-vendor-legacy": [
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/platform-common-vendor.css",
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/vendor-essentials.js"
        ],
        "platform-composite-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-composite-components/1.5.1-alpha+0d99d9b0-b5ef-4c2f-9bfd-ffb31eb400e2/platform-composite-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-composite-components/1.5.1-alpha+0d99d9b0-b5ef-4c2f-9bfd-ffb31eb400e2/platform-composite-components.js"
        ],
        "platform-entity-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-entity-service/1.4.1-alpha+fb1c48ac-dbf8-4ab1-8207-a2734bf89354/platform-entity-service.js"
        ],
        "platform-i18n-utils": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-i18n-utils/1.1.4-alpha+1471b21d-0058-41fb-a2a3-eaf49b8ce7aa/platform-i18n-utils.js"
        ],
        "platform-net-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-net-service/3.14.0-alpha+8e29c720-37fb-4a0b-8218-264aa74d78c4/platform-net-service-standalone.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-net-service/3.14.0-alpha+8e29c720-37fb-4a0b-8218-264aa74d78c4/platform-net-service.js"
        ],
        "platform-ui-layout-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-ui-layout-service/2.16.0-alpha+0d4255e3-cf45-4d42-9583-2375f45fb4fb/platform-ui-layout-service.js"
        ],
        "platform-user-auth-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-user-auth-service/1.18.0-alpha+d8a5ca88-4e6c-4a16-9b0e-e98f10472675/platform-user-auth-service.js"
        ],
        "platform-vendor-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-vendor-ui/1.1.0-alpha+e4c8cb4c-a648-45fe-9b9c-da48c39fb432/react-libs.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/platform-vendor-ui/1.1.0-alpha+e4c8cb4c-a648-45fe-9b9c-da48c39fb432/vendor-libs.js"
        ],
        "policies-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/policies-common-components/1.8.0-alpha+463168e3-4884-451b-b5a0-b50fdc1717fb/policies-common-components.js"
        ],
        "policies-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/policies-common-service/1.7.0-alpha+8fa97d21-5531-4810-bb36-309a747eb6c4/policies-common-service.js"
        ],
        "policies-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/policies-module/1.7.0-alpha+27bea2dd-f807-481d-8f9b-299545222434/policies-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/policies-module/1.7.0-alpha+27bea2dd-f807-481d-8f9b-299545222434/policies-module.js"
        ],
        "portal-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/portal-management-common-service/4.2.0-alpha+987904c0-829a-4003-887d-e9a22f9c31b2/portal-management-common-service.js"
        ],
        "portal-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/portal-management-module/4.2.0-alpha+abd4e039-6edf-4cc2-b3b6-a21f3c935c05/portal-management-module.js"
        ],
        "procurement-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/procurement-module/1.4.0-alpha+9196671d-a5da-491e-b1fb-80bc066f7b85/procurement-module.js"
        ],
        "product-catalog-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/product-catalog-module/2.2.0-alpha+7736c511-853f-4b28-9ee2-468d4b4986ea/product-catalog-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/product-catalog-module/2.2.0-alpha+7736c511-853f-4b28-9ee2-468d4b4986ea/product-catalog-module.js"
        ],
        "product-catalog-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/product-catalog-service/2.1.0-alpha+548fc14f-e87e-4ab1-96ff-dca6a40e1f94/product-catalog-service.js"
        ],
        "project-management": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/project-management/2.20.0-alpha+ed6519a2-f455-4884-8d5a-14aba029ade9/project-management.js"
        ],
        "project-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/project-management-common-service/2.9.0-alpha+O36nFFzNFM1LebLm044GbWXMeDc-/project-management-common-service.js"
        ],
        "psa-api-utils": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/psa-api-utils/1.1.0-alpha+ecf927c4-b527-417c-8879-645bd6880f3f/psa-api-utils.js"
        ],
        "psa-onboarding-ui-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/psa-onboarding-ui-module/2.1.0-alpha+1485c2dc-d3be-4ac7-8b1a-afb49c94d82f/psa-onboarding-ui-module.js"
        ],
        "psa-reimagined-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/psa-reimagined-module/1.0.1-alpha+805dcd04-18c3-4d82-b7c9-9d4060c8d45a/psa-reimagined-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/psa-reimagined-module/1.0.1-alpha+805dcd04-18c3-4d82-b7c9-9d4060c8d45a/psa-reimagined-module.js"
        ],
        "psa-ticketing-ui-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/psa-ticketing-ui-module/1.4.0-alpha+323bbe9b-bd1d-4a8b-bb5c-44ebef387b79/psa-ticketing-ui-module.js"
        ],
        "reboot-pending-desktop": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/reboot-pending-desktop/1.0.0-alpha+d2ccebcd-1850-4e7f-8553-a62963d585b2/reboot-pending-desktop.js"
        ],
        "reboot-pending-server": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/reboot-pending-server/1.1.0-alpha+3f4df4c6-56f7-4c45-83bf-b9e0d09800d8/reboot-pending-server.js"
        ],
        "remote-access-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/remote-access-components/1.3.0-alpha+2747ebd3-196f-45ea-a27b-bcfc32e8c788/remote-access-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/remote-access-components/1.3.0-alpha+2747ebd3-196f-45ea-a27b-bcfc32e8c788/remote-access-components.js"
        ],
        "remote-access-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/remote-access-service/1.3.0-alpha+bd9fb6d4-affa-4903-a6af-bb61a7ae121e/remote-access-service.js"
        ],
        "resource-selector-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/resource-selector-components/8.1.0-alpha+97c8a319-b1ee-4791-bf72-3bf9f6a8e4b1/resource-selector-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/resource-selector-components/8.1.0-alpha+97c8a319-b1ee-4791-bf72-3bf9f6a8e4b1/resource-selector-components.js"
        ],
        "rmm-cloud-devices": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rmm-cloud-devices/1.1.0-alpha+e26411b9-5392-461c-9615-6af9430604d3/rmm-cloud-devices.js"
        ],
        "rmm-devices": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rmm-devices/1.2.0-alpha+90130ca3-aa04-4518-b5fa-52703c205cc5/rmm-devices.js"
        ],
        "rmm-network-devices": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rmm-network-devices/1.1.0-alpha+2a4dd169-a444-4071-bcd1-234577f85949/rmm-network-devices.js"
        ],
        "rmm-scan-tool-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rmm-scan-tool-components/1.2.0-alpha+39dfd240-8cfb-4f13-97fb-f4c335d2d618/rmm-scan-tool-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rmm-scan-tool-components/1.2.0-alpha+39dfd240-8cfb-4f13-97fb-f4c335d2d618/rmm-scan-tool-components.js"
        ],
        "robotic-process-automation-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/robotic-process-automation-module/3.10.0-alpha+f6da5835-eb28-43fa-8708-5c32c045100f/robotic-process-automation-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/robotic-process-automation-module/3.10.0-alpha+f6da5835-eb28-43fa-8708-5c32c045100f/robotic-process-automation-module.js"
        ],
        "rpa-build-bots-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/rpa-build-bots-components/1.2.0-alpha+a3196c26-1dce-4ec4-b48d-22de9e667a07/rpa-build-bots-components.js"
        ],
        "saas-backup-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saas-backup-module/1.3.2/saas-backup-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saas-backup-module/1.3.2/saas-backup-module.js"
        ],
        "saas-security-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saas-security-module/2.11.0-alpha+298612e9-4536-4c40-a9c3-03d89ceb86da/saas-security-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saas-security-module/2.11.0-alpha+298612e9-4536-4c40-a9c3-03d89ceb86da/saas-security-module.js"
        ],
        "saasmonitoring-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saasmonitoring-management-common-service/1.0.0-alpha+d1Kw-Ltx2UN3CUFCcR2pbvojXnY-/saasmonitoring-management-common-service.js"
        ],
        "saasmonitoring-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saasmonitoring-management-module/1.0.0-alpha+DxocA6mmcBNDAL38pZ5t0i6PFSw-/saasmonitoring-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/saasmonitoring-management-module/1.0.0-alpha+DxocA6mmcBNDAL38pZ5t0i6PFSw-/saasmonitoring-management-module.js"
        ],
        "sales-order-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sales-order-common-service/1.0.0-alpha+A7f1bmDdz64-DQMHl-iylWx8DRQ-/sales-order-common-service.js"
        ],
        "sales-order-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sales-order-module/2.2.0-alpha+57ca9410-a306-4f92-994c-23dbd4704979/sales-order-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sales-order-module/2.2.0-alpha+57ca9410-a306-4f92-994c-23dbd4704979/sales-order-module.js"
        ],
        "scheduler-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scheduler-common-components/1.2.2-alpha+f40c5f91-a954-4c15-9648-f57f1516143f/scheduler-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scheduler-common-components/1.2.2-alpha+f40c5f91-a954-4c15-9648-f57f1516143f/scheduler-common-components.js"
        ],
        "scripting-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scripting-common-components/7.4.0/scripting-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scripting-common-components/7.4.0/scripting-common-components.js"
        ],
        "scripting-core": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scripting-core/8.4.0/scripting-core.js"
        ],
        "scripting-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scripting-module/7.4.0/scripting-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/scripting-module/7.4.0/scripting-module.js"
        ],
        "scripting-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/scripting-service/2.0.0-alpha.1/scripting-service.js"
        ],
        "security-activation-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-activation-module/1.0.1-alpha+662b6dd2-03c1-43de-a78e-5d736ac630d9/security-activation-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-activation-module/1.0.1-alpha+662b6dd2-03c1-43de-a78e-5d736ac630d9/security-activation-module.js"
        ],
        "security-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-common-service/3.17.0-alpha+f6e2bdd6-50df-43df-8af8-d902753c0d32/security-common-service.js"
        ],
        "security-integrations-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-integrations-common-service/2.7.0-alpha+1f68e3f9-8d1f-4595-b154-120584014350/security-integrations-common-service.js"
        ],
        "security-integrations-shared-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-integrations-shared-components/2.7.0-alpha+9f78bb06-43d7-42db-b0b1-b8619c5b5cf6/security-integrations-shared-components.js"
        ],
        "security-overview-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-overview-module/3.4.0-alpha+47b3ec19-e7f1-47f8-9ab6-1e1313792d51/security-overview-module.js"
        ],
        "security-shared-components-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-shared-components-ui/3.11.0-alpha+e926b22e-2605-4e34-9276-e0bdf39f81a1/security-shared-components-ui.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/security-shared-components-ui/3.11.0-alpha+e926b22e-2605-4e34-9276-e0bdf39f81a1/security-shared-components-ui.js"
        ],
        "shell-ui": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui/6.5.0-alpha+00e9c060-744a-4b71-86b4-ebfee866016f/run-asio-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui/6.5.0-alpha+00e9c060-744a-4b71-86b4-ebfee866016f/shell-ui.js"
        ],
        "shell-ui-eupclient": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-eupclient/1.0.0-alpha+605c1de3-c4dd-49a6-bae8-29f7656cfa0c/run-eupclient-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-eupclient/1.0.0-alpha+605c1de3-c4dd-49a6-bae8-29f7656cfa0c/shell-ui.js"
        ],
        "shell-ui-facadeclient": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-facadeclient/1.0.0-alpha+9a5f8cf1-7cdb-4e82-9ef7-0cc09a173989/run-facadeclient-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-facadeclient/1.0.0-alpha+9a5f8cf1-7cdb-4e82-9ef7-0cc09a173989/shell-ui.js"
        ],
        "shell-ui-itboost": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-itboost/3.2.0-alpha+JR6xwDjSsdNgL4uligq0zfIJw3g-/run-itboostOverlay-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-itboost/3.2.0-alpha+JR6xwDjSsdNgL4uligq0zfIJw3g-/run-manageIntegrationScript.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-itboost/3.2.0-alpha+JR6xwDjSsdNgL4uligq0zfIJw3g-/shell-ui.js"
        ],
        "shell-ui-sliinsights": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-sliinsights/3.1.2-alpha+20a6ac8f-98a7-46a6-9fc1-ed7bea8ffaf2/run-sliinsights-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-sliinsights/3.1.2-alpha+20a6ac8f-98a7-46a6-9fc1-ed7bea8ffaf2/shell-ui.js"
        ],
        "shell-ui-sliqbrb": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-sliqbrb/2.0.3-alpha+05cf01a2-e797-46dc-8b1e-72f7ab6bf744/run-sliqbrb-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-sliqbrb/2.0.3-alpha+05cf01a2-e797-46dc-8b1e-72f7ab6bf744/shell-ui.js"
        ],
        "shell-ui-universityclient": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-universityclient/5.2.0-alpha+9f9e40fe-ec64-41d6-bbc1-bb533ed66d71/run-universityclient-shell.js",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/shell-ui-universityclient/5.2.0-alpha+9f9e40fe-ec64-41d6-bbc1-bb533ed66d71/shell-ui.js"
        ],
        "sites-module": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/sites-module/1.0.1-alpha.425/sites-module.css",
            "https://static.itsupport247.net/platform-launchpad-ui-v2/sites-module/1.0.1-alpha.425/sites-module.js"
        ],
        "sites-service": [
            "https://static.itsupport247.net/platform-launchpad-ui-v2/sites-service/1.0.1-alpha.312/sites-service.js"
        ],
        "sli-insights-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sli-insights-module/2.1.6-alpha+17e4ac21-cb0b-41e3-9720-8940de46125e/sli-insights-module.js"
        ],
        "sli-qbrb-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sli-qbrb-common-service/2.4.0-alpha+e33ac603-533d-48c5-8ae8-a3379eabda48/sli-qbrb-common-service.js"
        ],
        "sli-qbrb-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/sli-qbrb-module/2.4.0-alpha+39b6fc5b-fd81-463d-9cac-fe76b80dbd7f/sli-qbrb-module.js"
        ],
        "smm-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/smm-module/1.4.0-alpha+ba517346-9c2f-41a3-8111-271944ebd7fa/smm-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/smm-module/1.4.0-alpha+ba517346-9c2f-41a3-8111-271944ebd7fa/smm-module.js"
        ],
        "tasking-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-common-components/5.4.0/tasking-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-common-components/5.4.0/tasking-common-components.js"
        ],
        "tasking-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-common-service/6.4.0/tasking-common-service.js"
        ],
        "tasking-composite-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-composite-components/2.4.0/tasking-composite-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-composite-components/2.4.0/tasking-composite-components.js"
        ],
        "tasking-integrator-config-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasking-integrator-config-service/2.4.0/tasking-integrator-config-service.js"
        ],
        "tasking-selector-module-legacy": [
            "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js",
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/platform-common-vendor.css",
            "https://static.itsupport247.net/platform-common-ui/3.2.82/platform-common-ui.css",
            "https://static.itsupport247.net/platform-common-vendor/1.0.15/vendor-essentials.js",
            "https://static.itsupport247.net/platform-common-ui/3.2.82/platform-common-ui.js",
            "https://static.itsupport247.net/platform-patching-ui/2.3.8/platform-patching-ui.js",
            "https://static.itsupport247.net/platform-scripting-ui/0.1.7/platform-scripting-ui.js",
            "https://static.itsupport247.net/platform-sequence-ui/0.0.23/platform-sequence-ui.js",
            "https://static.qa.itsupport247.net/platform-tasking-ui/0.2.52-1441/platform-tasking-ui.js",
            "https://static.itsupport247.net/platform-automation-engine-ui/0.1.39/platform-automation-engine-ui.js"
        ],
        "tasks-sequences-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasks-sequences-module/14.4.0/tasks-sequences-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tasks-sequences-module/14.4.0/tasks-sequences-module.js"
        ],
        "tax-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tax-management-common-service/9.0.0-alpha+debe8261-0330-4a66-a374-162115821570/tax-management-common-service.js"
        ],
        "tax-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/tax-module/12.0.0-alpha+6b268474-ac44-443b-87b9-b7f42008609a/tax-module.js"
        ],
        "ticket-admin-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-admin-module/2.5.0-alpha+lvqbqP5NE47-aSuigx3i2Tu0yhM-/ticket-admin-module.js"
        ],
        "ticket-core-pod-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-core-pod-module/10.19.0-alpha+52889c8f-5510-4aab-bf16-4fae94624992/ticket-core-pod-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-core-pod-module/10.19.0-alpha+52889c8f-5510-4aab-bf16-4fae94624992/ticket-core-pod-module.js"
        ],
        "ticket-details-pods-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-details-pods-module/1.0.0-alpha+-TiIKmuvtcEDVl5mfrKj0-Idc0o-/ticket-details-pods-module.js"
        ],
        "ticket-grid-pod-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-grid-pod-module/1.11.0/ticket-grid-pod-module.js"
        ],
        "ticket-management-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-management-common-service/11.19.0-alpha+95f26f81-4082-482f-837b-dbe22b140aba/ticket-management-common-service.js"
        ],
        "ticket-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-management-module/13.2.0-alpha+1d0e59d6-d746-4059-8143-ff4163a27a50/6d7943556cc908aaefee610ef2a759f5.svg",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-management-module/13.2.0-alpha+1d0e59d6-d746-4059-8143-ff4163a27a50/ticket-management-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-management-module/13.2.0-alpha+1d0e59d6-d746-4059-8143-ff4163a27a50/ticket-management-module.js"
        ],
        "ticket-time-entry-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/ticket-time-entry-pod/1.5.0/ticket-time-entry-pod.js"
        ],
        "time-entry-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/time-entry-common-service/1.0.1-alpha+O-Z9LtDvu7MlNnsIKUoh0OkIlt0-/time-entry-common-service.js"
        ],
        "time-service-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/time-service-module/7.8.0-alpha+d8a851d4-1fcb-40fb-bc10-9a1507724360/time-service-module.js"
        ],
        "timesheet-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/timesheet-module/1.0.0-alpha+aqP0fr1XsE1hT0ByHTbaCu-BGnE-/timesheet-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/timesheet-module/1.0.0-alpha+aqP0fr1XsE1hT0ByHTbaCu-BGnE-/timesheet-module.js"
        ],
        "umm-reports-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/umm-reports-module/1.17.1/umm-reports-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/umm-reports-module/1.17.1/umm-reports-module.js"
        ],
        "unified-configuration-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-configuration-pod/1.1.0-alpha+adb7c7b9-e354-43e8-bd20-459d10d865e3/unified-configuration-pod.js"
        ],
        "unified-product-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-product-pod/1.1.0-alpha+2991c68d-77bf-4dd2-b240-4733acd9db10/unified-product-pod.js"
        ],
        "unified-scheduling-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-scheduling-pod/1.1.0-alpha+fd4a24d4-c083-4a19-baf9-0df3c5319f5e/unified-scheduling-pod.js"
        ],
        "unified-task-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-task-pod/1.1.0-alpha+c29b2914-4ab4-4a13-bb12-41584ecacb3e/unified-task-pod.js"
        ],
        "unified-ticket-overview-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-ticket-overview-pod/1.1.0-alpha+6fc12c53-4ea2-4dcd-8b24-cb0349eb94a8/unified-ticket-overview-pod.js"
        ],
        "unified-ticketing-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-ticketing-common-components/1.1.0-alpha+f667c0bd-a598-46ee-8e0d-3e3100845e1a/unified-ticketing-common-components.js"
        ],
        "unified-ticketing-common-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-ticketing-common-service/1.1.0-alpha+e0f134ae-ea7f-4394-8719-732f9eb8c1b6/unified-ticketing-common-service.js"
        ],
        "unified-ticketing-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-ticketing-module/1.1.0-alpha+89cd615c-d15b-44a0-a79a-b1da5800a6de/unified-ticketing-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-ticketing-module/1.1.0-alpha+89cd615c-d15b-44a0-a79a-b1da5800a6de/unified-ticketing-module.js"
        ],
        "unified-time-entry-pod": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unified-time-entry-pod/1.1.0-alpha+7e133029-3e5c-4618-a218-333e8e298cd1/unified-time-entry-pod.js"
        ],
        "university-client-ui-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/university-client-ui-module/5.2.0-alpha+69375da4-ac85-42c7-9199-1e98f9b6eef0/university-client-ui-module.js"
        ],
        "unposted-invoices-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unposted-invoices-module/3.0.1-alpha+3a439b86-1671-4583-9eb8-f5ffcbd21638/unposted-invoices-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/unposted-invoices-module/3.0.1-alpha+3a439b86-1671-4583-9eb8-f5ffcbd21638/unposted-invoices-module.js"
        ],
        "uom-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/uom-module/1.0.0-alpha+PwAeWpXORi18EbToFyil0--1NEk-/uom-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/uom-module/1.0.0-alpha+PwAeWpXORi18EbToFyil0--1NEk-/uom-module.js"
        ],
        "uom-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/uom-service/1.0.0-alpha+TSyRbm5D-PziKBIrSzTjGa3FwyA-/uom-service.js"
        ],
        "vendor-billing-details-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendor-billing-details-module/5.6.0-alpha+8f3b64d6-b56b-4c7c-8efe-edff7649b500/vendor-billing-details-module.js"
        ],
        "vendor-billing-details-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendor-billing-details-service/4.6.0-alpha+6e3a6a07-3318-44bd-b991-8f59bd4150af/vendor-billing-details-service.js"
        ],
        "vendor-development-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendor-development-module/1.0.9-alpha+44ed16a7-c570-4126-9311-c4ec971d0eab/vendor-development-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendor-development-module/1.0.9-alpha+44ed16a7-c570-4126-9311-c4ec971d0eab/vendor-development-module.js"
        ],
        "vendor-mapping-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendor-mapping-components/1.0.0-alpha+KkG-1mq663BbMR4g2XumkhypDYA-/vendor-mapping-components.js"
        ],
        "vendors-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendors-module/1.0.0-alpha+mg4uRp9sJqvVLX49QvPWraNX5v0-/vendors-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendors-module/1.0.0-alpha+mg4uRp9sJqvVLX49QvPWraNX5v0-/vendors-module.js"
        ],
        "vendors-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vendors-service/1.0.0-alpha+qCziJtmxJh-DpCHHI-rN-WHcH1Y-/vendors-service.js"
        ],
        "virtualization-monitoring-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/virtualization-monitoring-module/1.4.0-alpha+df98aff6-4d61-4de8-8b04-54c07c04e018/virtualization-monitoring-module.js"
        ],
        "virtualization-monitoring-service": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/virtualization-monitoring-service/1.0.0-alpha+683759bc-94bf-4925-830a-53b0dfbe845b/virtualization-monitoring-service.js"
        ],
        "vulnerability-management-portal-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vulnerability-management-portal-module/3.13.0-alpha+7475b3e8-86a1-4986-94e2-5e65b808da4c/vulnerability-management-portal-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vulnerability-management-portal-module/3.13.0-alpha+7475b3e8-86a1-4986-94e2-5e65b808da4c/vulnerability-management-portal-module.js"
        ],
        "vulnerability-sites-mgmt-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vulnerability-sites-mgmt-module/3.12.0-alpha+10f544fa-e2ee-4116-b37f-98e35ca1618c/vulnerability-sites-mgmt-module.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/vulnerability-sites-mgmt-module/3.12.0-alpha+10f544fa-e2ee-4116-b37f-98e35ca1618c/vulnerability-sites-mgmt-module.js"
        ],
        "webroot-signup-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/webroot-signup-module/1.2.0-alpha+10625491-7a0e-4196-a215-2284fddb28a2/webroot-signup-module.js"
        ],
        "workflow-common-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/workflow-common-components/2.34.1/workflow-common-components.css",
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/workflow-common-components/2.34.1/workflow-common-components.js"
        ],
        "workflow-core": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/workflow-core/2.34.1/workflow-core.js"
        ],
        "workflow-management-module": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/workflow-management-module/2.34.1/workflow-management-module.js"
        ],
        "workflow-self-service-components": [
            "https://static.qa.itsupport247.net/platform-launchpad-ui-v2/workflow-self-service-components/1.25.1/workflow-self-service-components.js"
        ]
    }

    setTimeout(()=>{
        res.json({launchpadPackageConfig:launchpadPackageConfig});
    },100)
   
});

app.get('/pod', (req, res) => {
    const data = [
        {
            id: '3fa85f64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            identifier: 'module',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa8dvd5f64-57zc17-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            identifier: 'activation',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa8xxxxx5f64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2cqq3fddd66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2cqqddsdsd3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3sdcscfa85f64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Devices',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2cqqtbthn3f66afa61',
            releaseType: "",
            type: 'pod',
            identifier: 'activation-products-module',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Devices',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2cqq3f66aiuhygtfrfa61',
            type: 'pod',
            releaseType: "",
            identifier: '',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Dashboard',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-4562-b3fc-2cqq3f66adcdcdfa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Dashboard',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64ddd-5ddd717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Dashboard',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3dfa85f64-5717-4562-b3fc-2cqqddd3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Device',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-ss5717-4562-b3fc-2cqq3f66afddda61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Device',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717sss-4562-b3fc-2cqq3f66afa61',
            releaseType: "",
            type: 'pod',
            identifier: 'activation-products-module',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'Device',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64-5717-sss4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: '',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Device',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85fsss64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Device',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f64sssadwsvsvsvsvs-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3svsvsvfa85f64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85fadvsfbdgnfhm64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: 'ticket-notes',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Device',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fa85f6fvbghjmk,mjhngfb4-5717-4562-b3fc-2cqq3f66afa61',
            releaseType: "",
            type: 'pod',
            identifier: 'activation-products-module',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        },
        {
            id: '3fapvdvdvdv85f64-5717-4562-b3fc-2cqq3f66afa61',
            type: 'pod',
            releaseType: "",
            identifier: '',
            imageUrl: 'https://placehold.co/600x400',
            metadata: {
                managePermissions: ['Permission 1', 'Permission 2'],
                name: 'contact-overview',
                title: 'Chart',
                description:
                    'Chart ipsum dolor sit lorem a amet, consectetur adipiscing elit',
                categoryId: '1111',
                categoryName: 'Admin',
                moduleName: 'contact',
                fileLocation: ['test/location/test-component-123.js'],
                componentProps: {},
                component: null,
            },
            allowCustomFields: true,
            entitlementName: 'sample-entitlement',
        }
    ];  

    setTimeout(() => {
        res.json(data);     
    },100);
   
})
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
