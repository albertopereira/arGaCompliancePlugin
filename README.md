# arGaCompliancePlugin
__Plugin for Atom (Access to Memory) to conditionally accept Google Analytics 4 cookies and tracking through a form__

This theme is for version 2.7 and up, that support Google Analytics 4 trackers. Previous versions were not tested.

_Note: for instructions on how to setup alternatives to GA, GDPR compliant, see [here](./docs/README.md)._

__The problem__

As of 2023, Google Analytics 4 (GA4) still has yet to reach a consensus with the European regulators regarding data transfer between the EU and the USA. There are also other selected features, like data sharing between other Google products, which would breach the GDPR law. The introduction of the IP addresses anonymization feature is not enough to prevent the possibility of univocally identify a user, and the consent mode, which allows for a fine tuning of which data is sent to Google, also lacks any binding legal interpretation to guarantee it does not break the GDPR.

So, for now, 2 solutions exist to have GA4 implemented:

1 - Divert any EU visitors statistics to an european based datastore;  

2 - Allow for a complete removal, through a consent form, of any collection of information of the visitor.

This plugin implements the second solution. Before explicit consent, or if there is an explicit denial, the GA4 feature WILL NOT send any information for collection.   

**IMPORTANT NOTE**:   
Note that it is also mandatory to have explicit Privacy Policy and Terms & Conditions pages, with all the information regarding the gathering of visitor's information.  
Those pages should include information regarding:  

* Scope of the privacy policy;
* Personal data collected about the user (direct and indirect);
* Categories of processed personal data;
* Purposes of the processing of personal data;
* Sharing and disclosure of personal data;
* Cookies policy;
* Conservation of personal data;
* Data storage;
* Right of users regarding data (opposition, information, access, portability, rectification and deletion);
* Acceptance of consent;
* Data security;
* Subcontracting/DataProcessor;
* Hyperlinks to Websites;
* Contact of the person responsible within the institution.

[in Portuguese] University of Coimbra have excellent information and examples:  
https://www.uc.pt/protecao-de-dados/politica-de-privacidade/  
https://www.uc.pt/protecao-de-dados/politica-de-cookies/

## How to use

To use this plugin: 

* change the content of the file *env.js* to edit information regarding the Google Analytics 4 tracking id (G-***), and the text of the consent form  
* copy the contents to a *arGaCompliancePlugin* folder in the plugins folder of the atom installation folder;

* enable the plugin from the backoffice (see https://www.accesstomemory.org/en/docs/2.7/user-manual/administer/manage-plugins/ for more information).