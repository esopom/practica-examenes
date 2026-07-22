// ARCHIVO GENERADO — no lo edites a mano.
// Se genera con:  node scripts/build-exams.js
// (a partir de los JSON de data/exams/, que salen de scripts/import-pdfs.js)
//
// Exámenes incrustados para poder publicar la web como sitio estático, sin
// servidor ni base de datos. correct_indices usa índices base 0 sobre options
// (A=0, B=1, ...); más de un índice = pregunta de selección múltiple.

const EXAMS_DATA = [
  {
    "id": 1,
    "name": "ADM201 Examen 1",
    "questions": [
      {
        "id": 1001,
        "question_text": "Where can the multilingual solution search feature be enabled?",
        "options": [
          "Public Knowledge Base",
          "Salesforce Content",
          "Solution tab search",
          "Self-service portal"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 1002,
        "question_text": "What is an option when customizing a report?",
        "options": [
          "Add a gauge component",
          "Summarize fields",
          "Add a grouping",
          "Schedule a refresh time",
          "Add a filter"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 1003,
        "question_text": "What is the purpose of Customer Communities?",
        "options": [
          "To provide Web self-service by exposing Knowledge articles",
          "To allow partners to access contact records for case collaboration",
          "To share support reports and dashboards with high-profile accounts",
          "To allow customers to log and check the status of cases online"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 1004,
        "question_text": "What item appears in a user’s My Unresolved Items after synchronization using Salesforce for Outlook?",
        "options": [
          "Notes not associated to a record",
          "Cases not assigned to a contact",
          "Contacts not assigned to an account",
          "Emails not associated to a record."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1005,
        "question_text": "What should be considered when configuring the lead conversion process?",
        "options": [
          "Custom lead fields can be mapped to custom object fields",
          "Standard lead fields are automatically converted to account, contact, and opportunity fields.",
          "Custom lead fields can be mapped to account, contact, and opportunity fields.",
          "Roll-up summary lead fields can be mapped to custom contact fields."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1006,
        "question_text": "The support team at Universal Containers wants to be more proactive about renewing support. They would like the support representative dedicated to each account to be notified a month before the support plan expires. What should an administrator configure to meet this requirement?",
        "options": [
          "Workflow rule",
          "Auto-response rule",
          "Assignment rule",
          "Escalation rule"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1007,
        "question_text": "When the multiple currencies feature is enabled, which currency is used as the basis for exchange rate?",
        "options": [
          "Record currency",
          "Corporate currency",
          "Personal currency",
          "Active currency"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 1008,
        "question_text": "Which setting can a system administrator enable in the Salesforce user interface?",
        "options": [
          "Customizable recent tags",
          "Related list hover links",
          "Chatter Messenger for specific users",
          "Printable list views"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1009,
        "question_text": "How can users access Salesforce from their mobile devices?",
        "options": [
          "Install Salesforce Connect for mobile",
          "Use web browser on a mobile device",
          "Use the downloadable Salesforce1 mobile application",
          "Install the Salesforce1 mobile configuration"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1010,
        "question_text": "A user profile has login hour restrictions set to Monday through Friday, 8:00",
        "options": [
          "m. to 5:00 p.m. The user has logged in at 4:30 p.m. on a Tuesday and it is now 5:01 p.m. Which behaviour of the application should the user expect? A- The user will be able to continue working, but will be unable to start any new session",
          "The user will be logged out and any unsaved work-in-process will be saved.",
          "The user will be logged out and any unsaved work-in-process will be lost.",
          "The user will be able to continue working and start new sessions"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1011,
        "question_text": "Universal Containers has a marketing team set up as a public group. A sales representative would like to engage marketing team on one opportunity What should the sales representative do to ensure the marketing team can access the opportunity?",
        "options": [
          "Change the opportunity owner to the public group",
          "Add the public group to the opportunity team",
          "Manually share the record with the public group",
          "Add the public group to an opportunity queue"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1012,
        "question_text": "What user interface setting must be enabled for users to edit records in a list view?",
        "options": [
          "Enhanced page layout editor",
          "Inline editing",
          "Enhanced lists",
          "Enhanced profile list views"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1013,
        "question_text": "An opportunity record, created with a close date of July 30, meets the criteria of a time-dependent workflow rule. The time-dependent action is scheduled for July 23. What happens if the opportunity is edited before July 23 and no longer meets the criteria?",
        "options": [
          "The time-dependent action will execute on July 30",
          "The time-dependent action will execute on July 23",
          "The time-dependent action is put on hold",
          "The time-dependent action is automatically removed from the queue."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 1014,
        "question_text": "What is a method for adding content to Salesforce CRM Content?",
        "options": [
          "Attachments",
          "Libraries",
          "Documents",
          "Chatter files"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1015,
        "question_text": "What does a page layout allow an administrator to control?",
        "options": [
          "The business process and related picklist values displayed",
          "The record types available to each role and profile",
          "The field users see on detail and edit pages",
          "The fields users see in reports and list views"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1016,
        "question_text": "The marketing team at Universal Containers wants to send an email to each lead received from its website. The country of the incoming lead should determine the language of the email that will be sent to the lead. How can a system administrator automate this process?",
        "options": [
          "Create an email template for each language and an assignment rule to send the appropriate template",
          "Create a single email template and use the translation workbench to translate and send the appropriate template",
          "Create an email template for each language and an auto-response rule to send the appropriate template",
          "Create an email template for each language and a workflow alert to send the appropriate template."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1017,
        "question_text": "Which is a feature of Chatter?",
        "options": [
          "Events",
          "Bookmarks",
          "Recommendations",
          "Feeds",
          "Notes"
        ],
        "correct_indices": [
          1,
          2,
          3
        ]
      },
      {
        "id": 1018,
        "question_text": "What level of access can be set when sharing a document folder with users?",
        "options": [
          "Read-only",
          "Read/Write/Create/Delete",
          "Read/Write",
          "Read/Write/Create"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 1019,
        "question_text": "Which feature license can be assigned to a user record in Salesforce?",
        "options": [
          "Opportunity User",
          "Knowledge User",
          "Service Cloud User",
          "Console User"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1020,
        "question_text": "How can Knowledge articles be used?",
        "options": [
          "To display Salesforce Solutions",
          "To display Salesforce Answers",
          "To display for customer self-service",
          "To resolve customer cases"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 1021,
        "question_text": "What option is available when scheduling a dashboard refresh?",
        "options": [
          "Send a refresh notification to users with access to the dashboard",
          "View and remove a scheduled dashboard refresh",
          "Schedule the dashboard to refresh in different time zones",
          "Define refresh times for specific dashboard components"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 1022,
        "question_text": "What is the purpose of the Ideas community?",
        "options": [
          "To provide access to articles that answer questions around an idea theme",
          "To comment on and vote for ideas posted by other community members",
          "To posts customer ideas by logging cases on the Ideas tab of the portal",
          "To invite customers, partners, and employees to submit ideas around a theme"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1023,
        "question_text": "Which circumstance will prevent a system administrator from deleting a custom field?",
        "options": [
          "The field is used in a page layout",
          "The field is used in a workflow field update",
          "The field is used in a report",
          "The field is part of a field dependency"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 1024,
        "question_text": "Universal Containers requires that the organization-wide default for opportunities set to public read/write. However, sales users are complaining that opportunity reports return too many results, making it difficult to find their team’s opportunities in the report result. How can the system administrator address this problem?",
        "options": [
          "Update the sharing rules to limit user access to certain opportunities",
          "Move the opportunity report into a folder with restricted access",
          "Move the opportunity reports into each user’s personal report folder",
          "Use the Show filter to filter report results and reduce records returned"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 1025,
        "question_text": "When can a validation rule be used to prevent invalid data?",
        "options": [
          "When records are deleted by a user",
          "When records are imported",
          "When records are submitted using web-to-lead",
          "When records are updated by a workflow rule",
          "When records are edited by a user"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 1026,
        "question_text": "What should an administrator consider when configuring workflow rules?",
        "options": [
          "Rules must be deactivated before using an import wizard",
          "All existing records are evaluated when a new rule is activated",
          "Rule actions can take place immediately or on a specific date",
          "Rules can be evaluated when records are created or edited"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 1027,
        "question_text": "What feature allows a user to group campaigns within a specific marketing program or initiative?",
        "options": [
          "Campaign influence",
          "Campaign lists",
          "Campaign members",
          "Campaign hierarchy"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 1028,
        "question_text": "Which chart type can be used to display summary values from two different levels of grouping in a report?",
        "options": [
          "Donut Chart",
          "Stacked bar chart",
          "Grouped line chart",
          "Funnel chart"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1029,
        "question_text": "Universal Containers set the organization-wide defaults for cases to private. When a case is escalated, case ownership changes to a Tier 2 support agent. How can a system administrator give the sale operations team read/write access to all escalated cases?",
        "options": [
          "Create a criteria-based sharing rule",
          "Create a case assignment rule",
          "Create an ownership-based sharing rule",
          "Create a case escalation rule"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1030,
        "question_text": "Which statement about products and price books is true?",
        "options": [
          "The standard and list price for a product can be listed in multiple currencies",
          "Price books that contain assets cannot contain products",
          "A product can have a different list price in different price books",
          "Products without a price are automatically added to the standard price book"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 1031,
        "question_text": "What type of record access can an Administrator grant through sharing rules?",
        "options": [
          "Read/Write/Transfer",
          "Read Only",
          "Read/Write/Delete",
          "Read/Write"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1032,
        "question_text": "Which option is available when using the process visualizer?",
        "options": [
          "Add approval steps from the process visualizer",
          "View approval processes as a flow chart",
          "Share the annotated approval process diagrams",
          "Edit the criteria used to trigger the approval process"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1033,
        "question_text": "A user is having trouble logging into Salesforce. The user’s login history shows that this person has attempted to log in multiple times and has been locked out of the organization. How can the system administrator help the user log into Salesforce?",
        "options": [
          "Send an email to the user containing the user’s password",
          "Log in as the user and enter a new password",
          "Click Reset Password on the user’s record detail page",
          "Click Unlock on the user’s record detail page"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 1034,
        "question_text": "Which dashboard component can display data from the summary rows of a report?",
        "options": [
          "Metric",
          "Table",
          "Gauge",
          "Chart"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1035,
        "question_text": "A marketing user needs to create a new campaign, but the New button is NOT visible from the campaign home page. The system administrator has verified that the user has the “Create” profile permission for the campaign object. How should the system administrator resolve the issue?",
        "options": [
          "Select the marketing User checkbox in the user record",
          "Add the New button to the page layout using the page layout editor",
          "Select the “Manage Campaigns” profile permission",
          "Grant the user “Read” profile permission for the campaign object"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1036,
        "question_text": "Universal Containers uses a custom field on the account object to capture the account credit status. The sales team wants to display the account credit status on opportunities. Which feature should a system administrator use to meet this requirement?",
        "options": [
          "Cross-object formula field",
          "Workflow field update",
          "Lookup field",
          "Roll-up summary field"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1037,
        "question_text": "Universal Containers has two business groups, Product and Services. Both groups will be using opportunities to track deals, but different fields are required by each group. How should a system administrator meet this requirement?",
        "options": [
          "Create two sales processes",
          "Create two page layouts",
          "Create two permission sets",
          "Create two record types"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1038,
        "question_text": "Universal Containers wants to create a custom object to capture account survey data. Users must be able to select an account from the survey record. Users also need the ability to view related surveys on the account record. How should the system administrator meet these requirements?",
        "options": [
          "Create a lookup relationship field on the account object",
          "Add the account related list to the survey page layout",
          "Add the survey related list to the account page layout",
          "Create a lookup relationship field on the survey object"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 1039,
        "question_text": "How can a system administrator restrict users from viewing certain fields in list views, searches, page layouts and reports?",
        "options": [
          "Remove the field from reports and list views",
          "Set the field to hidden using field-level security",
          "Remove the field from page layout",
          "Set the field to hidden on the user role"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 1040,
        "question_text": "What can be modified on standard object fields?",
        "options": [
          "Label",
          "Field type",
          "Picklist values",
          "Help text",
          "Default text"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 1041,
        "question_text": "If two objects have a parent-child relationship, how can a user access the child record from the parent record?",
        "options": [
          "Child field",
          "Lookup field",
          "Related list",
          "Custom link"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1042,
        "question_text": "What relationship can be selected in a custom report type where Accounts is the primary object and Contacts is the related object?",
        "options": [
          "Each contact must have a related account",
          "Each account must not have related contacts",
          "Each contact may or may not have a related account",
          "Each account may or may not have related contacts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 1043,
        "question_text": "Universal Containers currently assigns its users from the facilities and IT team to the same profile. Universal Containers recently created a custom object to track company cars and wants only users from the facilities team to have access to this new object. How can administrator meet this requirement?",
        "options": [
          "Modify the standard profile currently shared by both teams",
          "Create a custom profile for users on the facilities team",
          "Configure field-level security on the new object for the facilities team",
          "Assign the facilities team to a new role in the role hierarchy"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 1044,
        "question_text": "Universal Containers uses a private sharing model for opportunities. The sales team wants sales engineers to be involved in specific opportunities to help sales representatives close deals faster. How can an administrator meet this request?",
        "options": [
          "Add Chatter groups to opportunities",
          "Add Sales engineers to accounts teams",
          "Add sales engineers to opportunity teams",
          "Enable Chatter Feed Tracking on opportunities"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1045,
        "question_text": "A marketing user has received a file of leads to import in Salesforce. What tool can be used to avoid duplicate lead records?",
        "options": [
          "Data loader",
          "Merge leads function",
          "Import wizard",
          "Validation rules"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1046,
        "question_text": "Sales representatives at Universal Containers should not be able to create leads, delete their own accounts, or send mass emails. How can an administrator meet these requirements?",
        "options": [
          "Create a sharing rule",
          "Modify a standard profile",
          "Change the organization-wide default settings",
          "Create a custom profile"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 1047,
        "question_text": "The VP of Sales at Universal Containers requested that “Verbal Agreement” be added as a new opportunity stage. The administrator added this new picklist value to the stage field, but found that the new value was not available to users. What should the administrator do?",
        "options": [
          "Ensure the new value was marked as active",
          "Ensure the limit of 10 stage values was not exceeded",
          "Add the new value to the appropriate sales process",
          "Add the new value to the appropriate record type"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 1048,
        "question_text": "When importing data, what happens if some records do NOT meet the data validation criteria?",
        "options": [
          "Import process fails only for the records with invalid data",
          "Import process requires user authorization to import the invalid records",
          "Import process aborts when it encounters the first invalid record",
          "Import process ignores the data validation criteria"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1049,
        "question_text": "What is the purpose of the AppExchange?",
        "options": [
          "Support users can install the Salesforce Console for Service custom app",
          "Customers can share and install apps published by Salesforce partners",
          "Partners can download accounts and contacts to collaborate on sales deals",
          "Administrators can download and customize pre-built dashboards and reports"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 1050,
        "question_text": "Universal Containers wants to ensure that users complete the standard Industry field when creating a new account record. To address this concern, the administrator set the industry field as required. However, some users are still able to create a new account record without completing the Industry field. What should an administrator do to troubleshoot the issue?",
        "options": [
          "Verify the field-level security for the Industry field is not set to “Read Only” on the users’ profiles",
          "Verify the users have the “Modify all Data” permission for accounts on their profiles",
          "Verify the users have the “Edit” permission for accounts on their profiles",
          "Verify the industry field is set as required on all the account page layouts assigned to the users’"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 1051,
        "question_text": "When case assignment rules are being set up, cases can be assigned to whom?",
        "options": [
          "User",
          "Case team",
          "Queue",
          "Contac"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 1052,
        "question_text": "The support group at Universal Containers wants agents to capture different information for product support and inquiry cases. In addition, the lifecycle for product support cases should have more steps than the lifecycle for inquiry cases. What feature should an administrator use to meet these requirements?",
        "options": [
          "Page layouts",
          "Field-level security",
          "Record types",
          "Permission sets",
          "Support processes"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 1053,
        "question_text": "What setting is controlled by a user’s profile?",
        "options": [
          "Feature license assignment",
          "Field-level security",
          "Assigned apps",
          "Locale settings",
          "Record type assignment"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 1054,
        "question_text": "What type of customization can be done on Activities (tasks and events)?",
        "options": [
          "Validation Rules",
          "Workflow Rules",
          "Custom Fields",
          "Field Tracking",
          "Assignment Rule"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 1055,
        "question_text": "A system administrator at Universal Containers created a new account record type. However, sales users are unable to select the new record type when creating new account records. What is a possible reason for this?",
        "options": [
          "The record type does not have an associated page layout",
          "The record type has not been activated",
          "The record type has not been added to the sales user profile",
          "The record types has not been set as the default record type"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1056,
        "question_text": "Universal Containers uses web-to-case to convert support requests submitted through its website into cases. The support team would like Salesforce to automatically send an email containing password reset instructions to the customer when the case subject contains the words “forgot” and “password”. What does the administrator need to configure to meet this requirement?",
        "options": [
          "Validation rule",
          "Auto-response rule",
          "Email-to-case",
          "Support settings"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 1057,
        "question_text": "What standard object has a one-to-many relationship with the account object?",
        "options": [
          "Contact",
          "Lead",
          "Opportunity",
          "Campaign",
          "Case"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 1058,
        "question_text": "When using sharing rules, what can records be shared with?",
        "options": [
          "Queues",
          "Public groups",
          "Roles and subordinates",
          "Profiles"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 1059,
        "question_text": "Universal Containers wants to automatically back up all Salesforce data on a monthly basis. Which tool can a system administrator use to meet this requirement?",
        "options": [
          "Data export service",
          "Reporting snapshot",
          "Import wizard",
          "Scheduled report"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 1060,
        "question_text": "What can be transferred from one user to another user during a mass transfer of account records?",
        "options": [
          "Open cases",
          "Open activities",
          "Closed activities",
          "Related custom object records",
          "Closed cases Respuestas de examen"
        ],
        "correct_indices": [
          0,
          1,
          4
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "ADM201 Examen 2",
    "questions": [
      {
        "id": 2001,
        "question_text": "A sales user at Universal Container has updated the opportunity stage for an opportunity in the pipeline. What may be updated as a result of the stage change?",
        "options": [
          "Sales quota",
          "Account rating",
          "Forecast category",
          "Probability"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 2002,
        "question_text": "A sales executive at Universal Containers wants to be notified whenever high-value opportunities are created for hot accounts. How should an admin meet this requirement?",
        "options": [
          "Create the workflow rule on opportunity object",
          "Create an escalation rule based on the opportunity amount",
          "Create an auto-response rule based on the opportunity amount",
          "create a validation rule that evaluates the account rating"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2003,
        "question_text": "The sales team at Universal Container wants an easy solution to gather customer requirements and share presentations with their customers. What should an admin do to help the sales team achieve this goal?",
        "options": [
          "Add customers to private chatter groups",
          "Use chatter files to share presentations",
          "Add customers to libraries",
          "Create opportunity teams for customers"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 2004,
        "question_text": "Which statement about sharing rules is true?",
        "options": [
          "Sharing rules open up access of records",
          "Sharing rules are required in public read/write organizations",
          "Sharing rules grant delete access to records",
          "Sharing rules grant record access to roles and public groups"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 2005,
        "question_text": "What must an admin do when creating a record type?",
        "options": [
          "Set the field level security for the record type",
          "Create a new page layout for the record type",
          "Assign the record type to the appropriate profiles",
          "Add the record type to the required user records"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2006,
        "question_text": "What is a capability of Salesforce Knowledge?",
        "options": [
          "Knowledge allows an organization to share articles with partner portal users",
          "Knowledge only allows a single article type across all data categories",
          "Knowledge automatically creates a solution for each new article",
          "Knowledge uses data categories and roles to make articles visible to the specific users"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 2007,
        "question_text": "Universal Container is using a private sharing model. The U.S. sales director needs full access to all records owned by the U.S. sales representatives. How can this be accomplished?",
        "options": [
          "Define a role hierarchy where the U.S sales director rolls up to the CEO",
          "Define a role hierarchy where the U.S. sales representatives roll up to the sales director",
          "Give the U.S. sales director read/write/edit/delete object permission on the profile",
          "Place the U.S. sales director in a queue with the U.S. sales representatives"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 2008,
        "question_text": "What will occur when a system admin creates a dynamic dashboard?",
        "options": [
          "The data displayed varies based on the user viewing the dashboard",
          "The dashboard component resizes based on the device used to view it",
          "The dashboard automatically sends an email when the underlying data changes",
          "The dashboard refreshes automatically whenever the underlying data changes"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2009,
        "question_text": "A time-dependent action is placed in the workflow queue when the record is created. When will the action be removed from the queue?",
        "options": [
          "When the record no longer matches the rule criteria",
          "When a validation rule triggered for the record",
          "When another record triggers the same workflow rule",
          "When the action is deleted from the workflow queue"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 2010,
        "question_text": "What permission is set in a user profile?",
        "options": [
          "Object permissions",
          "Active",
          "Run reports",
          "Mass email",
          "Marketing user"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 2011,
        "question_text": "Which statement is true regarding an approval process?",
        "options": [
          "An approval action defines the result of record approval or rejection",
          "A delegated approver can reassign approval requests",
          "The approval-history related list can be used to track the process",
          "An assignment rule defines the approver for each process step"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 2012,
        "question_text": "What is affected by changing the default locale setting for an organization?",
        "options": [
          "Language",
          "Date fields",
          "Currency",
          "Time zone"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 2013,
        "question_text": "What will happen when a user attempts to log into Salesforce from an IP address that is outside the login IP range on the User's profile but within the organization-wide trusted IP range?",
        "options": [
          "The user will not be able to log in at all",
          "The user will be able to log in after the computer is activated",
          "The user will be able to log in without activating the computer",
          "The user will be able to log in after answering a security question"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2014,
        "question_text": "How can a system admin add users to a Salesforce organization using chatter free?",
        "options": [
          "Assign chatter-free licenses to users outside the specified user domains",
          "Assign chatter-free licenses to existing user Salesforce users",
          "Create users in the organization and assign them a chatter-free license",
          "Enable invites to allow users to invite others within specified email domains"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 2015,
        "question_text": "Which statement about chatter posts and comments are true?",
        "options": [
          "Updates to the chatter feed on a record are only visible to users with access to the record",
          "Posts made to a user's profile are visible to all users in the organization",
          "Posts to a user's profile are hidden from anyone below that user in the role hierarchy",
          "Posts to a user's profile can be made private by clicking the icon"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 2016,
        "question_text": "Criteria-based sharing rules can be created for which objects?",
        "options": [
          "Contacts",
          "Accounts",
          "Opportunities",
          "Campaign Members",
          "Users"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 2017,
        "question_text": "Where can conditional highlighting be used?",
        "options": [
          "Tabular reports",
          "Enhanced list views",
          "Matrix reports",
          "Summary reports"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 2018,
        "question_text": "The marketing team at Universal Containers uses a web-to-lead form to capture leads from its website and a lead-assignment rule assigns the leads to the appropriate sales representatives. How can a system admin ensure that all leads are handled even when they do not meet the assignment criteria?",
        "options": [
          "Specify a default lead owner",
          "Specify a default lead creator",
          "Create an escalation rule to route unassigned leads",
          "Create a validation rule to route unassigned leads"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2019,
        "question_text": "Universal Container needs to synchronize data between Salesforce and an external financial system. How can a system admin accomplish this?",
        "options": [
          "Use an external ID field to match records between the systems",
          "Use the data loader to match records between the systems",
          "Use the data loader to upsert Salesforce records into the financial system",
          "Use the Excel connector to export records from both systems into Excel"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2020,
        "question_text": "A system admin at Universal Container needs to mass update the lead source on a number of opportunity records. How can this be accomplished?",
        "options": [
          "Export opportunities and update using the import wizard",
          "Use the similar opportunities to update the opportunities",
          "Export opportunities and update using the data loader",
          "Create a list view for opportunities and update using inline editing"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 2021,
        "question_text": "What does a custom report type determine?",
        "options": [
          "The report format of the resulting report",
          "The field that can be used as columns when building a report",
          "The custom summary formulas displayed in a resulting report",
          "The objects that are available when building a report"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2022,
        "question_text": "How can a system admin grant users access to dashboards?",
        "options": [
          "Designate running users",
          "Create and share data categories",
          "Share folders with public groups",
          "Share folders with roles"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 2023,
        "question_text": "Sales management at Universal Container needs to display the information below in each account record: amount of all closed-won opportunities, amount of all open opportunities. Which feature should a system admin use to meet this requirement?",
        "options": [
          "Roll-up summary fields",
          "Calculated columns in the related list",
          "Cross-object formula fields",
          "Workflow rules with field updates"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2024,
        "question_text": "What can be done with a workflow field update action?",
        "options": [
          "Change the record type of a record",
          "Update the value of a formula field",
          "Update the value of a field on a child object",
          "Apply a specific value to a field"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 2025,
        "question_text": "The cloud scheduler has which capability?",
        "options": [
          "The cloud scheduler allows users to view available meeting times on lead and contact calendars",
          "Salesforce can automatically propose multiple meeting times based on Salesforce user calendars",
          "The cloud scheduler can be enabled at the user profile level",
          "A custom logo can be added to the meeting request email set to a contact or lead"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2026,
        "question_text": "What should a system admin consider when setting up mobile Lite?",
        "options": [
          "It must be enabled for the entire organization",
          "It allows access to most custom objects in the organization",
          "Only recently-viewed records are synchronized",
          "It allows access to all standard objects in the organization"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 2027,
        "question_text": "What type of field allows users to input text, images, and links?",
        "options": [
          "Text area",
          "Input area",
          "Text area (rich)",
          "Text and image area"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2028,
        "question_text": "A user responsible for managing and creating campaigns is unable to create a new campaign, even though the user's profile has the \"create\" profile permission for campaigns. How should a system admin grant the correct access to the user?",
        "options": [
          "Create a campaign sharing rule to grant access to the user",
          "Grant the user delegated administration rights to campaigns",
          "Assign the user to the standard marketing user profile",
          "Select the marketing user checkbox on the user record"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2029,
        "question_text": "When converting a lead, how can an admin capture custom lead data on the converted contact?",
        "options": [
          "Map custom lead field to the standard lead field",
          "Use the data loader to move the custom lead data",
          "Map custom lead field to custom contact fields",
          "Use the lead conversion wizard to select the fields"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2030,
        "question_text": "Universal Container has two sales groups, each with its own unique sales process. What is the best way to ensure that sales representatives have access to only the stages relevant to their sales process when working on opportunities?",
        "options": [
          "Page layouts",
          "Multi-select picklists",
          "Record types",
          "Roles"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2031,
        "question_text": "What tab setting on a profile makes a tab NOT accessible on the All Tabs page or visible in any apps?",
        "options": [
          "Read-only",
          "Default off",
          "Tab hidden",
          "Default on"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2032,
        "question_text": "Which data can be highlighted in a report using conditional highlighting?",
        "options": [
          "Data fields",
          "Summarized totals",
          "Group by field names",
          "Summary formulas",
          "Grand totals"
        ],
        "correct_indices": [
          1,
          3,
          4
        ]
      },
      {
        "id": 2033,
        "question_text": "A user at Universal Container reports an error message when attempting to log in. The admin checks the user's login history, but there is no record of the attempted login. What could be the cause of this issue?",
        "options": [
          "The user is attempting to login with the wrong password",
          "The user is attempting to login outside of the profile ip login range",
          "The user is attempting to login outside of the profile login hours",
          "The user is attempting to login with the wrong username"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2034,
        "question_text": "What does the controlling field determine when field dependencies are being created?",
        "options": [
          "The dependent fields that appear on a layout",
          "The default value populated in the dependent field",
          "The values that appear in the dependent field",
          "The field-level-security for the dependent field"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2035,
        "question_text": "How can a sales user relate an opportunity to a campaign?",
        "options": [
          "Select the campaign record type when creating the opportunity",
          "Use the campaign influence related list on the opportunity",
          "Use the campaign hierarchy related list on the opportunity",
          "Select the primary campaign source for the opportunity"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2036,
        "question_text": "The admin at Universal Containers will create a custom field to track a specific Tier 2 support user on a case record. What data type should be used when creating this custom field?",
        "options": [
          "Lookup filter",
          "Formula",
          "Hierarchical relationship",
          "Lookup relationship"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2037,
        "question_text": "Universal Containers wants to capture the invoice number and account credit score for billing cases. How would an admin accomplish this?",
        "options": [
          "Create a validation rule",
          "Create custom fields",
          "Create a support processes C. Create a page layout"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 2038,
        "question_text": "A system admin at Universal Container needs to prevent sales representatives from editing fields on an opportunity once the opportunity has been moved to closed stage. Which data validation tool can be used to accomplish this?",
        "options": [
          "Record types and read-only page layouts",
          "Formula fields",
          "Data validation rules",
          "Workflow approvals"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 2039,
        "question_text": "What can a marketing user do using the manage button on a campaign record?",
        "options": [
          "Create a custom report including all the campaign members",
          "Import new leads and associate them with the campaign",
          "Associate existing opportunities with the campaign",
          "Associate existing contacts with the campaign"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2040,
        "question_text": "Universal Containers set the organization-wide default for opportunities to private. Which record will an opportunity pipeline report return?",
        "options": [
          "Opportunities for which the user running the report is also the account owner",
          "Opportunities for the entire sales organization regardless of the user running the report",
          "Opportunities owned by the user running the report and users below them in the role hierarchy",
          "Opportunities owned by the user running the report and users in the same role in the role hierarchy"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2041,
        "question_text": "Which privilege can be granted to members of a content library (workspace) without modifying user permissions?",
        "options": [
          "Edit a member's library permissions",
          "Add tags when editing content details",
          "Share content with other users in chatter",
          "Create a new library"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 2042,
        "question_text": "The sales operations team at Universal Containers needs to be able to read, edit, delete, and transfer all records owned by sales representatives. How can a system admin meet this requirement?",
        "options": [
          "Add sales operations users to the default account teams for all sales reps",
          "Define a role hierarchy where the sales operations role is above the sales reps role",
          "Create sharing rules that give sales operations access to records owned by sales reps",
          "Manually share all records owned by sales reps with sales operations"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 2043,
        "question_text": "What should a system admin consider when deleting a custom field?",
        "options": [
          "Fields used in workflow and assignment rules cannot be deleted",
          "Fields must be removed from page layouts after being deleted",
          "Field values should be archived before a field is deleted",
          "Existing field values must be transferred to a new custom field",
          "Deleted fields and values can be restored from the recycle bin within 15 days"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 2044,
        "question_text": "A marketing user has received a file of leads to import into Salesforce. What tool can be used to avoid duplicate lead records?",
        "options": [
          "Import Wizard",
          "Merge Leads Function",
          "Data Loader",
          "Validation Rules"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2045,
        "question_text": "Universal Containers needs to use cases to manage both customer support issues and internal change requests. Which functionality should a system admin use to meet this requirement?",
        "options": [
          "Support process",
          "Page layouts",
          "Record types",
          "Validation rules",
          "Delegated administration"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 2046,
        "question_text": "Universal Containers requires that its Salesforce account data including attachments be backed up weekly. Which tool should a system admin use to accomplish this?",
        "options": [
          "Account analytic snapshot",
          "Account report export",
          "Data loader",
          "Data export service"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2047,
        "question_text": "When are validation rules applied when using Salesforce for Outlook?",
        "options": [
          "Every time a record is saved",
          "Every time a user views a record",
          "Every time a record is updated",
          "Every time data is synced with the server"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2048,
        "question_text": "Which component can be included in a custom home page layout?",
        "options": [
          "Dashboard components",
          "Trending chatter topics",
          "Analytic snapshots",
          "Messages and alerts",
          "Pending approval list"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 2049,
        "question_text": "Which statement about Community experts is true?",
        "options": [
          "Community experts can delete inappropriate community content",
          "Community experts are designated by an icon",
          "Community experts can manage salesforce ideas categories",
          "Community experts can be designated for salesforce ideas or answers"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2050,
        "question_text": "What can users do with Mobile Lite?",
        "options": [
          "View/create/edit/delete accounts, contacts, and opportunities",
          "View campaign and manage campaign members",
          "View/create/edit/delete custom objects",
          "Search for records that were not previously downloaded to a mobile device"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 2051,
        "question_text": "Universal Containers needs to allow a group of users to view account records that they do NOT own. Which feature can the system admin use to meet this requirement?",
        "options": [
          "Field-level security",
          "Account record types",
          "Sharing rules",
          "Public groups"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 2052,
        "question_text": "What action is possible with a workflow task?",
        "options": [
          "A task can be reused in multiple workflow rules",
          "A task can be tracked in the activity history",
          "A single task can be assigned to multiple users",
          "A task can be assigned to a chatter free user"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 2053,
        "question_text": "What must a system admin consider when setting up the running user for a dashboard?",
        "options": [
          "The running user becomes the default owner of the dashboard",
          "Data access permissions determine what data the users can view in the source reports",
          "Only users in the same role as the running user can view the dashboard",
          "The running user determines the data displayed in the components of the dashboard"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 2054,
        "question_text": "When working on opportunities, sales reps at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors. Which feature should a system admin use to facilitate them?",
        "options": [
          "Big deal alerts",
          "Chatter groups",
          "Similar opportunities",
          "Opportunity update reminders"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 2055,
        "question_text": "Which field type can be used as an external ID?",
        "options": [
          "Text field",
          "Email field",
          "Url field",
          "Number field",
          "Formula field"
        ],
        "correct_indices": [
          0,
          1,
          3
        ]
      },
      {
        "id": 2056,
        "question_text": "Which user is listed in the case history related list for case changes made for assignment and escalation rules?",
        "options": [
          "The owner of the case when the rule was triggered",
          "The user who created the assignment or escalation rule",
          "The system administrator",
          "The automated case user specified in the support settings"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 2057,
        "question_text": "A system admin has created a formula field on a lead object to calculate a number. How can the numerical value be mapped to the account record upon lead conversion?",
        "options": [
          "The lead formula field value can be mapped to a number field on the account record",
          "The lead formula field value can be mapped to a roll-up summary on the account record",
          "The lead formula field value can be mapped to a formula field on the account record",
          "The lead formula field value can be mapped to a standard field on the account field"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 2058,
        "question_text": "Which schedule type can be defined for a product?",
        "options": [
          "Revenue",
          "Production",
          "Quantity",
          "Forecast"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 2059,
        "question_text": "What task can a delegated admin perform?",
        "options": [
          "Manage users within specified roles",
          "Create new user profiles",
          "Reset passwords for all users",
          "Log in as a user who has granted login access",
          "Manage specified custom objects"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 2060,
        "question_text": "A system admin at Universal Containers created a custom object to capture custom feedback. How can the admin ensure that users have access to this new object?",
        "options": [
          "Add fields from the feedback object to the account page layout",
          "Create a lookup relationship from the account page to the feedback object",
          "Assign the feedback page layout to the appropriate user profiles",
          "Create a role in the hierarchy to provide user access to the new object Respuestas examen"
        ],
        "correct_indices": [
          2
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "ADM201 Examen 3",
    "questions": [
      {
        "id": 3001,
        "question_text": "What component in Salesforce is similar to a table of data?",
        "options": [
          "Record",
          "Field",
          "App",
          "Object"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 3002,
        "question_text": "How does a user navigate from an Account record to a related Contact record?",
        "options": [
          "Lookup Field",
          "Related List",
          "List View",
          "Force.com App Menu"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3003,
        "question_text": "Where can an administrator change the organization name and address, default locale, default language, and default time zone?",
        "options": [
          "Company Information",
          "Organization–wide Settings",
          "Business Hours",
          "Language Settings"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3004,
        "question_text": "Which user interface settings must be enabled to allow users to edit records directly from a list view, without navigating away from the page?answers",
        "options": [
          "Enable Inline Editing",
          "Enable Printable List Views",
          "Enable Enhanced Profile List Views",
          "Enable Enhanced Lists"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 3005,
        "question_text": "What is a capability of Chatter?answers",
        "options": [
          "People can see Chatter feed updates on records they follow.",
          "Customers can add posts to a public Chatter group.",
          "All users can enable objects and fields for feed tracking.",
          "People can @mention other people in a Chatter post"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 3006,
        "question_text": "What is determined by the user's profile?answers",
        "options": [
          "Which tabs and apps are visible in the user interface.",
          "Which currencies are available to users.",
          "What users can do with records of a particular object.",
          "Which individual records users can view and edit"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 3007,
        "question_text": "When creating a new user, what information is captured on the user record?answers",
        "options": [
          "Profile assigned to the user",
          "List of apps that the user can access",
          "Name, email address, and username of the user",
          "User interface settings that can be enabled for the user"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 3008,
        "question_text": "Support users at AW Computing can view, create, and edit accounts. However, the management team does not want support users to delete accounts in the organization. How can an administrator meet this requirement?",
        "options": [
          "Assign the Standard User profile to support users.",
          "Assign the Read Only profile to support users.",
          "Create a custom profile that has the View All permissions enabled for the account object and assign the custom profile to support users.",
          "Create a custom profile that has the Delete permission disabled for the account object and assign the custom profile to support users."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 3009,
        "question_text": "What should an administrator use to disable access to a custom application for a group of users?",
        "options": [
          "Profiles",
          "Sharing rules",
          "Web tabs",
          "Page layouts"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3010,
        "question_text": "Universal Containers needs to track the manufacturer and model for specific car companies. How can the administrator ensure that the manufacturer selected influences the values available for the model?",
        "options": [
          "Create the manufacturer field as a dependent picklist and the model as a controlling picklist.",
          "Create a lookup field from the manufacturer object to the model object.",
          "Create the manufacturer field as a controlling picklist and the model as a dependent picklist.",
          "Create a multi–select picklist field that includes both manufacturers and models."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3011,
        "question_text": "Which statement about custom summary formulas in reports is true?answers",
        "options": [
          "Reports can be grouped by a customs summary formula result.",
          "Custom summary formulas can reference a formula field within a report.",
          "Custom summary formulas can reference another customer summary formula.",
          "Custom summary formulas can be used in a report built from a custom report type."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 3012,
        "question_text": "What feature sets the default level of access users have to records they do not own, in each object?",
        "options": [
          "Sharing rules",
          "Organization–wide defaults",
          "Role hierarchy",
          "Manual Sharing"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3013,
        "question_text": "What does field–level security control?",
        "options": [
          "Which fields are automatically generated by the system.",
          "Which fields users can view and edit based on their profile.",
          "Which fields are required in the user interface.",
          "Which fields are encrypted to users based on their profile"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3014,
        "question_text": "Universal Containers needs to allow a group of users to view account records that they do NOT own. Which feature can the system administrator use to meet this requirement?",
        "options": [
          "Field Level Security",
          "Account record types",
          "Sharing Rules",
          "Public groups"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3015,
        "question_text": "What automatically occurs when a custom field is deleted?answers",
        "options": [
          "The field is removed from associated page layouts.",
          "The field values are archived in the setup audit trail.",
          "All field data is deleted.",
          "The field is removed from associated workflow rules"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 3016,
        "question_text": "An administrator at AW Computing created custom fields on the Opportunity object for Discount Percentage and Amount after Discount. The sales team wants these fields to be grouped together on the opportunity record. How can an administrator meet this requirement?",
        "options": [
          "Create a new related list on the opportunity page layout and add the custom fields to the related list.",
          "Create a new business process for opportunities that contain the custom fields.",
          "Create a new section on the opportunity page layout and add the custom fields to the section.",
          "Create a new record type for opportunities that contains the custom fields"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3017,
        "question_text": "An administrator created a validation rule to ensure that users do not change the Close Date of an opportunity to a day in the past. What happens when a user tries to save an opportunity that has a Close Date from last month?answers",
        "options": [
          "The validation failure is logged on the field history tracking related list.",
          "The error message defined in the validation rule displays on the record.",
          "The record will not save.",
          "The user receives an email with the reason the validation rule failed."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3018,
        "question_text": "What are the benefits of using the Data Import Wizard to import data into Salesforce?answers",
        "options": [
          "Import greater than 50,000 records.",
          "Choose whether or not to trigger workflow rules.",
          "Prevent duplicate records from entering the system.",
          "Load data for all standard and custom objects."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3019,
        "question_text": "How can an administrator prevent a former employee from logging in to the company's Salesforce organization and free up a user license?",
        "options": [
          "Delete the user record.",
          "Overwrite the user record.",
          "Freeze the user record.",
          "Deactivate the user record."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 3020,
        "question_text": "An administrator at AW Computing incorrectly imported a set of records into Salesforce. Which tools can the administrator use to remove the records from Salesforce?answers",
        "options": [
          "Salesforce roll–back",
          "Data loader",
          "Mass delete records",
          "Data Import Wizard"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3021,
        "question_text": "What report format displays a list of records sorted into groups with subtotals?",
        "options": [
          "Tabular",
          "Summary",
          "Matrix",
          "Joined"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3022,
        "question_text": "Which chart type can an administrator use to compare opportunity amounts by rep and then by stage?",
        "options": [
          "Gauge",
          "Funnel",
          "Stacked bar chart",
          "Donut"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3023,
        "question_text": "What is determined by the running user of the dashboard?",
        "options": [
          "What data viewers of the dashboard will see.",
          "Which users can access the dashboard.",
          "Which users can access the source reports for the dashboard.",
          "Which users can refresh a dashboard."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3024,
        "question_text": "What options are available when setting the evaluation criteria for a workflow rule?answers",
        "options": [
          "Created, and any time it's edited to no longer meet criteria",
          "Created",
          "Created, and any time it's edited to subsequently meet criteria",
          "Deleted"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3025,
        "question_text": "AW Computing wants the account owner to be notified when a high priority case is created for an account. How can an administrator accomplish this?",
        "options": [
          "Create a workflow rule to send an email alert to the account owner.",
          "Enable field history tracking to send an email alert to the account owner.",
          "Create an escalation rule to notify the account owner.",
          "Create an auto–response rule to send an email alert to the account owner."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3026,
        "question_text": "AW Computing wants to automate leads using a web–to–lead form. When a potential customer submits the form, the submitter should receive a customized email based on the lead source. How can an administrator meet this requirement?",
        "options": [
          "Map custom fields on the Lead object to custom fields on the Contact object.",
          "Create assignment rules that email the submitter based on the lead source.",
          "Create auto–response rules that send a different email for each lead source.",
          "Create a workflow rule that uses different email alerts for each lead source."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3027,
        "question_text": "Which features are available with Salesforce Knowledge that are not available with Solutions?answers",
        "options": [
          "Chatter feed collaboration",
          "Article types and data categories",
          "Article versioning",
          "Multi–language support"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3028,
        "question_text": "What are the capabilities of email–to–case?answers",
        "options": [
          "Triggers assignment rules, escalation rules, and workflow rules.",
          "Automatically associates customer email replies with the case.",
          "Uses the company's email address to associate an account with the case.",
          "Automatically populates case fields based on data the customer enters on the website"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 3029,
        "question_text": "Which of the following types of packages can be upgraded?",
        "options": [
          "Unmanaged Packages",
          "Managed Packages",
          "Packages cannot be upgraded"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3030,
        "question_text": "What will occur when a system administrator creates a dynamic dashboard?",
        "options": [
          "The dashboard refreshes automatically whenever the underlying data changes",
          "The data displayed varies based on the user viewing the dashboard",
          "The dashboard components re–size based on the device users to view the dashboard",
          "The dashboard automatically sends an email when the underlying data changes"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3031,
        "question_text": "What is the difference between the Marketing User Profile and the Marketing User checkbox at the User level?",
        "options": [
          "Marketing User Profile allows users to create and edit Campaigns Marketing User checkbox allows users to import Leads.",
          "They are the same thing",
          "Marketing User Profile allows users to import Leads. Marketing User checkbox allows users to create and edit Campaigns.",
          "None of the Above"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3032,
        "question_text": "With the \"manage campaign\" button on campaign selected, what all can you do with the integrated campaign builder?answers",
        "options": [
          "Import new leads and add it to campaign",
          "Associate opportunities to the campaign",
          "Associate existing contacts to the campaign",
          "Associate up to 50000 existing leads to the campaign"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 3033,
        "question_text": "Which permission is required to convert a lead?answers",
        "options": [
          "\"Transfer\" access for leads, accounts, contacts, and opportunities",
          "\"Convert Leads\" profile permission",
          "\"Import leads\" profile permission",
          "\"Create\" and \"Edit\" access for leads, accounts, contacts, and opportunities"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 3034,
        "question_text": "Criteria–based sharing rules can be created for which objects?answers",
        "options": [
          "Leads",
          "Campaign Members",
          "Contacts",
          "Products",
          "Accounts"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 3035,
        "question_text": "A system administrator at Company A needs to mass update the lead source on a number of opportunity records. How can this be accomplished?answers",
        "options": [
          "Use similar opportunities to update the opportunities",
          "Export opportunities and update using the import wizard",
          "Create a list view for opportunities and update using inline editing",
          "Export opportunities and update using the data loader"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 3036,
        "question_text": "You must meet the following prerequisites before enabling territory management:answers",
        "options": [
          "Your organization must be using customizable forecasting",
          "Follow the steps in the Deploying Territory Management Guide to prepare your organization for territory management.",
          "You must have the Marketing User Profile",
          "You must have the Territory Manager Profile"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 3037,
        "question_text": "Who may be assigned a workflow task?answers",
        "options": [
          "An Account team role",
          "A Sales Team Role",
          "The Record owner",
          "A single user",
          "Multiple users",
          "The Record creator"
        ],
        "correct_indices": [
          0,
          1,
          2,
          3,
          5
        ]
      },
      {
        "id": 3038,
        "question_text": "Which of the following cannot be on the controlling side of the Dependent Picklist?",
        "options": [
          "Standard Picklist",
          "Checkbox",
          "Multi–Select Picklist",
          "Custom Picklist"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3039,
        "question_text": "Which of the field types cannot be used as an External Id?answers",
        "options": [
          "Text Field",
          "Number Field",
          "Picklist Field",
          "Email Id Field",
          "URL"
        ],
        "correct_indices": [
          2,
          4
        ]
      },
      {
        "id": 3040,
        "question_text": "Sales representatives at Universal Containers should be notified any time support cases related to accounts they own change status. How can a system administrator accomplish this?",
        "options": [
          "Enable field history tracking to send an email alert to the account owner",
          "Create a workflow rule to send an email alert to the account owner",
          "Create an escalation rule to notify the account owner",
          "Create an auto-response rule to send an email alert to the account owner"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3041,
        "question_text": "What can a marketing user do using the Manage Members button on a campaign record?answers",
        "options": [
          "Create a custom report including all campaign members",
          "Import new leads and associate them with the campaigns",
          "Associate existing opportunities with the campaign",
          "Associate existing contacts with the campaign"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 3042,
        "question_text": "Which feature restricts a user's ability to log into Salesforce?answers",
        "options": [
          "Trusted IP ranges",
          "Login hours",
          "Login IP ranges",
          "Password policies"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 3043,
        "question_text": "What is used to create a relationship between an Opportunity object and a Campaign object?answers",
        "options": [
          "Campaign hierarchy fields",
          "Campaign influence related list",
          "Opportunity sales process",
          "Primary campaign source field"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 3044,
        "question_text": "An administrator created two picklist fields: candy manufacturer (hershey, mars) and candy type (snickers, milky way, reeces pieces, m&ms). Is it possible to relate the fields together so that the candy manufacturer field could impact the choices listed in the candy type field?",
        "options": [
          "Yes, the Candy Manufacturer is a dependent picklist, and the Candy Type is a controlling picklist,",
          "Yes, the Candy Manufacturer is a controlling picklist and the Candy Type is a dependent picklist,",
          "Yes, the Candy Manufacturer is a Master and the Candy Type is the Detail,",
          "No, because they are both custom fields",
          "No, because they are both pick fields"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3045,
        "question_text": "What statements is not true for a workflow task",
        "options": [
          "Historical tracking is allowed for workflow task",
          "A single task can be assigned to multiple users",
          "The due dates for workflow task is based on number of calendar days, The rule fails to recognize only working business days by default",
          "To assign tasks to multiple users, create multiple tasks as outcomes of the rule"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3046,
        "question_text": "When configuring Customizable Forecasting, you can set which of the following Forecast Dates for determining which opportunities contribute to the forecast?",
        "options": [
          "Opportunity Close Date Only",
          "Product Date Only",
          "Schedule Date Only",
          "Commit Date",
          "Opportunity Close Date, Product Date, Schedule Date"
        ],
        "correct_indices": [
          4
        ]
      },
      {
        "id": 3047,
        "question_text": "You are working with a Professional Edition organization. They wish to install the Expense Tracker which requires the use of 4 custom tabs, 3 custom objects, and one custom app. If the company is already using 4 applications, 36 custom objects, and 7 custom tabs, what will happen when they try to install Expense Tracker?",
        "options": [
          "They will not be able to complete the installation process as they have reached the maximum number of custom tabs",
          "They will not be able to complete the installation process as they have reached the maximum number of custom objects",
          "The installation will succeed",
          "The installation will succeed, but only the reports, dashboards and S Control will install"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3048,
        "question_text": "Which of the following object relationships is NOT allowed?",
        "options": [
          "Standard object as the \"master\" and a custom object as the detail",
          "Custom object as the “master\" and a standard object as the detail",
          "Custom object as a lookup to a standard object",
          "Custom object as a lookup to a custom object"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3049,
        "question_text": "All of the following are true about Default Sales Teams EXCEPT:",
        "options": [
          "Default Sales Teams are configured on a user record",
          "Default Sales Teams may be added manually to an opportunity record",
          "Default Sales Teams may be added automatically to an opportunity",
          "Default Sales Teams may be added manually to an account record"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 3050,
        "question_text": "Auto Response rules work on which objects?",
        "options": [
          "Leads and Cases",
          "Leads and Accounts",
          "Accounts and Opportunity",
          "Account and Cases"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3051,
        "question_text": "Which one of the following is a salesforce.com definition for a Lead?",
        "options": [
          "Any person, organization or company that may be interested in your products and services, that are not yet customers",
          "An organization, individual or company involved with your business such as customers, competitors and partners",
          "Any potential revenue-generating event i.e. “sales deal”",
          "Any individual or influencer associated with an account"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3052,
        "question_text": "An administrator notices there are too many duplicate records, numerous sharing rules, and a large number of manually shared records. Which situation may this be a symptom of?",
        "options": [
          "Role hierarchy that has too few roles.",
          "Sharing model that is too public.",
          "Sharing model that is too private.",
          "Object permissions on profiles that are too restrictive."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3053,
        "question_text": "In Salesforce Territory Management, which statement describes how a territory hierarchy is different from a role hierarchy?",
        "options": [
          "Territory hierarchy grants login access to all users in a territory.",
          "Territory hierarchy supports assigning users to multiple territories.",
          "Territory hierarchy automatically assigns users to sales teams in the territory.",
          "Territory hierarchy gives users in a territory full edit access to all accounts in that territory."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3054,
        "question_text": "___let(s) you segment your organization's data into logical sections, making searches, reports, and list views more meaningful to users.",
        "options": [
          "Territory Management",
          "Custom Settings",
          "Divisions",
          "None of the Above"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3055,
        "question_text": "What is the Impact on a User of the Organization level Locale Changes?",
        "options": [
          "The default Locale of the user is also set to the new Organization Level locale",
          "The User is asked for a Choice; if he would like to choose New Organization Locale or his own Locale",
          "No Impact on the User as he keeps using his own default Locale",
          "From a new session, user will see everything in the New Organization Locale"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 3056,
        "question_text": "API’s are not available for use in which Salesforce.com edition?",
        "options": [
          "Developer Edition",
          "Professional edition",
          "Enterprise Edition",
          "Unlimited edition"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3057,
        "question_text": "Which Type of Reports can't be used to create groups of data or charts?",
        "options": [
          "Tabular",
          "Summary",
          "Matrix",
          "Joined"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3058,
        "question_text": "Conditional highlighting cannot be used for?",
        "options": [
          "Tabular Reports",
          "Summary Reports",
          "Matrix Reports",
          "Joined Reports"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 3059,
        "question_text": "How many ranges can be defined in the case of a Conditional Highlighting?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 3060,
        "question_text": "Which function is available in the report builder interface, prior to running the report? 2 ANSWERS",
        "options": [
          "Save",
          "Printable view",
          "Schedule future runs",
          "Show/hide details",
          "Export details RESPUESTAS"
        ],
        "correct_indices": [
          0,
          3
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "ADM201 Examen 4",
    "questions": [
      {
        "id": 4001,
        "question_text": "How should a System Administrator prevent a user from logging in if they are a running user of a dashboard?",
        "options": [
          "Freeze the user",
          "Deactivate the user",
          "Delete the user",
          "Change user profile to Read Only"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 4002,
        "question_text": "Which of the two types of records can be transferred from one another user during mass transfer of account records?",
        "options": [
          "Closed activities",
          "Open cases",
          "Related Custom object records",
          "Closed Cases"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4003,
        "question_text": "A System Administrator at Universal Containers needs to transfer records from one user to another Which two objects should be transferred using the mass transfers tool?",
        "options": [
          "Quotas",
          "Campaigns",
          "Leads",
          "Accounts"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 4004,
        "question_text": "To ensure compliance with platinum Service Level Agreement, cases that remain in the Tier 2 queue for more than four hours must be re-assigned to the Tier 3 queue What feature meets this requirement?",
        "options": [
          "Auto Response Rule",
          "Case Comments",
          "Case Assignment Rule",
          "Case Escalation Rule"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4005,
        "question_text": "Which two can be done with a workflow field update action?",
        "options": [
          "Apply a specific value to a field",
          "Select a formula field for a field update",
          "Update the value of a field on a child object",
          "Change the record type of a record"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4006,
        "question_text": "Which two options are available when using the process visualizer for approvals?",
        "options": [
          "Edit the criteria used to trigger the approval process",
          "View approval processes as a flow chart",
          "Share annotated approval process diagrams",
          "Add approval steps from the process visualizer"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4007,
        "question_text": "What is a valid organization-wide default option for the Account object?",
        "options": [
          "Public Read/Write/Transfer",
          "Private",
          "Public Read/Write/Delete",
          "No Access"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 4008,
        "question_text": "Universal Containers has two business groups, Products and Services. Both groups will be using opportunities to track deals, but different fields are required by each group In which two ways should an administrator meet this requirement?",
        "options": [
          "Create two lead processes",
          "Create two page layouts",
          "Create two record types",
          "Create two permission sets"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4009,
        "question_text": "When using sharing rules, which two ways can records be shared?",
        "options": [
          "Roles and subordinates",
          "Queues",
          "Profiles",
          "Public groups"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4010,
        "question_text": "Universal Containers wants to create a custom object to capture account survey data. Users must be able to select an account from the survey record. Users also need the ability to view related surveys on the account record Which two actions should the administrator take to meet these requirements?",
        "options": [
          "Create a lookup relationship field on the survey object",
          "Add the account related list to the survey page layout",
          "Create a lookup relationship field on the account object",
          "Add the survey related list to the account page layout"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4011,
        "question_text": "Which two should an administrator consider when configuring workflow rules?",
        "options": [
          "All existing records are valuated when a new rule is activated",
          "Rules must be deactivated before using Data Import Wizard",
          "Rules can be evaluated when records are created or edited",
          "Rule actions can take place immediately or can be time based"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 4012,
        "question_text": "The VP of Sales at Universal Containers requested that “Verbal Agreement” is added as a new opportunity stage. The administrator added this new picklist value to the stage field, but found that the new value was not available to users What should the administrator do?",
        "options": [
          "Ensure the limit of the 10 stage valued was not exceeded",
          "Add the new value to the appropriate record type",
          "Ensure the new value was marked as active",
          "Add the new value to the appropriate sales process"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4013,
        "question_text": "Which three permissions are set in a user´s profile?",
        "options": [
          "Object Permissions",
          "Marketing User",
          "Active",
          "Mass Email",
          "Run Reports"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 4014,
        "question_text": "Which two ways should users access Salesforce from their mobile devices?",
        "options": [
          "Use web browser on a mobile device",
          "Install the Salesforce1 mobile configuration",
          "Use the downloadable Salesforce1 mobile application",
          "Install Salesforce Connect for Mobile"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4015,
        "question_text": "What type of field do Administrators use when creating a junction object?",
        "options": [
          "Look-up",
          "Fórmula",
          "Text area",
          "Master-detail"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4016,
        "question_text": "The support team at Universal Containers wants to be more proactive about renewing support plans with customers. They would like the support representative dedicated to each account to be notified a month before the account´s support plan expires What should an administrator configure to meet this requirement?",
        "options": [
          "Workflow rule",
          "Assignment rule",
          "Escalation rule",
          "Auto-response rule"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4017,
        "question_text": "Universal Containers has two sales groups. Each group has its own unique sales process How can an administrator ensure that sales representatives have access to only the stages relevant to their sales process when working on opportunities?",
        "options": [
          "Multi-select picklists",
          "Record types",
          "Page layouts",
          "Roles"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 4018,
        "question_text": "Which are two capabilities of the content delivery feature of Salesforce Content?",
        "options": [
          "Associate the content delivery with a Salesforce record",
          "Password protect content deliveries that contain sensitive data",
          "Customize the URL assigned to the content delivery",
          "Encrypt certain content delivery files"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 4019,
        "question_text": "When converting a lead, how can an administrator capture custom lead data on the converted contact?",
        "options": [
          "Map custom lead fields to custom contact fields",
          "Use the data loader to move the custom lead data",
          "Map custom lead fields to standard contact fields",
          "Use the lead conversion wizard to select the fields"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4020,
        "question_text": "Which two are Validation Rule Fields?",
        "options": [
          "Error Message",
          "Owner",
          "Active Date",
          "Error Condition Formula"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4021,
        "question_text": "Which two settings can a system administrator enable in the Global User Interface Settings?",
        "options": [
          "Chatter Messenger for specific users",
          "Printable list views",
          "Customizable recent tags",
          "Related list hover links"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4022,
        "question_text": "A system administrator at Universal Containers created a new account type. However, sales users are unable to select the new record type when creating new account records What is it a possible reason for this?",
        "options": [
          "The record type does not have an associated page layout",
          "The record type has not been activated",
          "The record type has not been added to the sales user profile",
          "The record type has not been set as the default record type"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4023,
        "question_text": "Universal Containers has a marketing team set up as a public group. A sales representative would like to engage the marketing team on one opportunity What should the sales representative do to ensure the marketing team can access the opportunity?",
        "options": [
          "Add the public group to the opportunity team",
          "Manually share the record with the public group",
          "Change the opportunity owner to the public group",
          "Add the public group to an opportunity queue"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 4024,
        "question_text": "Which two chart types should be used to display summary values from two different levels of grouping in a report?",
        "options": [
          "Grouped line chart",
          "Donut chart",
          "Funnel chart",
          "Stacked bar chart"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4025,
        "question_text": "Where can a System Administrator assign a page layout?",
        "options": [
          "Role",
          "Profile",
          "App",
          "Record Type"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4026,
        "question_text": "A lightning for outlook layout can be assigned to which two options?",
        "options": [
          "User",
          "Team",
          "Profile",
          "Role"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4027,
        "question_text": "Which statement about products and price books is true?",
        "options": [
          "A product can have a different list price in different price books",
          "Products without a price are automatically added to the standard price book",
          "The standard and list price for a product can be listed in multiple currencies",
          "Price books that contain assets cannot contain products"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4028,
        "question_text": "If two objects have a parent-child relationship, how can a user access the child record from the parent record?",
        "options": [
          "Related list",
          "Custom link",
          "Lookup field",
          "Child field"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4029,
        "question_text": "What relationship can be selected in a custom report type where accounts is the primary object and Contacts is the related object?",
        "options": [
          "Each account must not have related contacts",
          "Each contact may or may not have a related account",
          "Each contact must have a related account",
          "Each account may or may not have related contacts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4030,
        "question_text": "What will happen when a user attempts to log in to Salesforce from an IP address that is outside the login IP range on the user’s profile but within the organization-wide trusted IP range?",
        "options": [
          "The user will be able to log in after the computer is activated",
          "The user will be able to log in after answering a security question",
          "The user will be able to log in without activating the computer",
          "The user will not be able to log in at all"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4031,
        "question_text": "Which two object records can be synced with Lightning Sync?",
        "options": [
          "Opportunities",
          "Calendar Events",
          "Accounts",
          "Contacts"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4032,
        "question_text": "A user is having trouble logging into Salesforce. The user´s login history shows that this person has attempted to log in multiple times and has been locked out of the organization Which two ways should the administrator help the user log into Salesforce?",
        "options": [
          "Click Reset Password on the user´s record detail page",
          "Send an email to the user containing the user´s password",
          "Click Unlock on the user´s record detail page",
          "Log in as the user and enter a new password"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4033,
        "question_text": "A user profile has login hour restrictions set to Monday through Friday, 8:00",
        "options": [
          "m. to 5:00 p.m. The user logged in at 4:30 p.m. on a Tuesday and it is now 5:01 p.m. What application behaviour should the user expect? a. The user will be able to continue working and start new sessions",
          "The user will be logged out and any unsaved work-in-process will be saved",
          "The user will be logged out and any unsaved work-in-process will be lost",
          "The user will be able to continue working, but will be unable to start any new sessions"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4034,
        "question_text": "The sales team at Universal Containers wants an easy solution to gather customer requirements and share presentations with their customers Which two actions should an administrators take to help the sales team achieve this goal?",
        "options": [
          "Add customers to private Chatter groups",
          "Create opportunity teams for customers",
          "Add customers to libraries",
          "Use Chatter files to share presentations"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 4035,
        "question_text": "When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors Which two features should an administrator use to facilitate this?",
        "options": [
          "Opportunity update reminders",
          "Big deal alerts",
          "Chatter groups",
          "Similar opportunities"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 4036,
        "question_text": "When custom fiscal year is enabled, which two statements apply?",
        "options": [
          "The custom fiscal year must be defined manually",
          "The custom fiscal year setting cannot be disabled",
          "The custom fiscal year automatically updates product schedules",
          "The defined custom fiscal year affects forecasts"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4037,
        "question_text": "Universal Containers has activated Web-to-Case on their corporate website. IT configured Auto-Response to thank the customer for logging the case and activated Assignment Rules based on the state (USA) in which the customer resides. Case ownership is therefore determined and routed to the corresponding queue – North, South, East, or West. Customer Cases that do not meet the existing criteria should be assigned to Queue – World What solution will satisfy this requirement?",
        "options": [
          "Using a Triggers, change the owner of cases not in the US to Queue – World",
          "In Active Case Assignment, add a last entry rule criteria where State = NULL the assign to Queue – World",
          "In Case Support Settings, change Default Case Owner to Queue – World",
          "Using a workflow rule, change the owner of the new cases not in the US to Queue – World"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 4038,
        "question_text": "Where can an end user enable the multilingual solution search feature?",
        "options": [
          "Salesforce Console for Service",
          "Solution Tab Search",
          "Public Knowledge Base",
          "Salesforce Content"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 4039,
        "question_text": "Which two ways allow a sales user to relate an opportunity to a campaign?",
        "options": [
          "Select the primary campaign source for the opportunity",
          "Use the campaign hierarchy related list on the opportunity",
          "Use the campaign influence related list on the opportunity",
          "Select the campaign record type when creating the opportunity"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4040,
        "question_text": "What does campaign influence allow a user to do?",
        "options": [
          "Assign the percentage of influence that each campaign has on an opportunity",
          "Report on the campaigns that have contributed to an opportunity",
          "View the entire campaign hierarchy",
          "Summarize campaign member statistics on a campaign"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 4041,
        "question_text": "When importing data, what happens if some records do not meet the data validation criteria?",
        "options": [
          "Import process requires user authorization to import the invalid records",
          "Import process ignores the data validation criteria",
          "Import process fails only for the records with invalid data",
          "Import process aborts when it encounters the first invalid record"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 4042,
        "question_text": "Which two feature licences can be assigned to a user record in Salesforce?",
        "options": [
          "Service Cloud User",
          "Console User",
          "Knowledge user",
          "Opportunity user"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4043,
        "question_text": "Which are two purposes of the AppExchange?",
        "options": [
          "Support users can install the Salesforce Console for Service custom app",
          "Customers can share and install apps published by Salesforce partners",
          "Administrators can download and customize pre-built dashboards and reports",
          "Partners can download accounts and contacts to collaborate on sales deals"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4044,
        "question_text": "What setting on a profile makes a tab not accessible on the All Tabs page or visible in any app, but still allows a user to view records that would normally be found under this tab?",
        "options": [
          "Tab Settings",
          "Org-wide Defaults",
          "Object Permissions",
          "App Permissions"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4045,
        "question_text": "Which two statements are correct regarding the Community Cloud?",
        "options": [
          "Data categories control access to articles and questions",
          "Unanswered questions are automatically escalated to new cases",
          "Answers can be displayed externally on a Community",
          "Community experts must be internal Salesforce users"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 4046,
        "question_text": "A case is created from a web form If no active assignment rules exist, who will be assigned ownership?",
        "options": [
          "Default Workflow User",
          "System Administrator",
          "Automated Case User",
          "Default Case Owner"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4047,
        "question_text": "Universal Containers requires that the organization-wide default for opportunities be set to public read/write. However, sales users are complaining that opportunity reports return too many results, making it difficult to find their team´s opportunities in the report results. How can the system administrator address this problem?",
        "options": [
          "Move the opportunity reports into each user´s personal report folder",
          "Move the opportunity reports into a folder with restricted access",
          "Use the Field filter to filter report results and reduce records returned",
          "Update the sharing rules to limit user access to certain opportunities"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 4048,
        "question_text": "What must an administrator do when creating a record type?",
        "options": [
          "Assign the record type to the appropriate profiles",
          "Set the field-level security for the record type",
          "Create a new page layout for the record type",
          "Add the record type to the required user records"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4049,
        "question_text": "Universal Containers wants support agents skilled in a particular product line to own cases directly after customers log them from an automated channel What feature meets this requirement?",
        "options": [
          "Assignment rules",
          "Case Escalation Rules",
          "Workflow Field Update",
          "Case Team Routing"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4050,
        "question_text": "Which three types of customization should be done on Activities (tasks and events)?",
        "options": [
          "Assignment rules",
          "Custom Fields",
          "Workflow Rules",
          "Validation Rules",
          "Field Tracking"
        ],
        "correct_indices": [
          1,
          2,
          3
        ]
      },
      {
        "id": 4051,
        "question_text": "Which two components are populated with data from the grand total of a custom report?",
        "options": [
          "Metric",
          "Gauge",
          "Table",
          "Chart"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 4052,
        "question_text": "When case assignment rules are being set up, in which two places should cases be assigned?",
        "options": [
          "Contact",
          "User",
          "Profile",
          "Queue"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 4053,
        "question_text": "A time-dependent action is places in the workflow queue when the record is created Which two scenarios will cause the action to be removed from the queue?",
        "options": [
          "When a validation rule is triggered for the record",
          "When the record no longer matches the rule criteria",
          "When the action is deleted from the workflow queue",
          "When another record triggers the same workflow rule"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4054,
        "question_text": "What should be considered when configuring the lead conversion process?",
        "options": [
          "Roll-up summary lead fields can be mapped to custom contact fields",
          "Standard lead fields are automatically converted to account, contact an opportunity fields",
          "Custom lead fields can be mapped to account, contact and opportunity fields",
          "Custom lead fields can be mapped to custom object fields"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 4055,
        "question_text": "Which three are Chatter features?",
        "options": [
          "Feeds",
          "Notes",
          "Events",
          "Bookmarks",
          "Recommendations"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 4056,
        "question_text": "Universal Containers tracks both customers issues and user issues A customer issue can be logged as: • New • Working • Closed A user issue can be logged as: • New • Waiting for reply • Closed What features should a System Administrator use to track both case types?",
        "options": [
          "Support Processes and Record Types",
          "Process Builder and Page Layouts",
          "Automated Case Users and Workflows",
          "Record Types and Page Layouts"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4057,
        "question_text": "Sales Managers want to capture an additional email address for Contact records What field property will ensure the proper format?",
        "options": [
          "Data Type",
          "Field-level Security",
          "Default Value",
          "Validation Rule"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 4058,
        "question_text": "Which three options are available when customizing a report?",
        "options": [
          "Schedule a refresh time",
          "Add a gauge component",
          "Summarize fields",
          "Add a grouping",
          "Add a filter"
        ],
        "correct_indices": [
          2,
          3,
          4
        ]
      },
      {
        "id": 4059,
        "question_text": "How can an Administrator allow all internal users to view a dashboard as a Sales Manager within a sales region?",
        "options": [
          "Create a dashboard to run as the logged-in user",
          "Create a dashboard for all opportunities in the region",
          "Create a dashboard with multiple components",
          "Create a dashboard to run as a specified user"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 4060,
        "question_text": "Universal Containers wants to automatically back up all Salesforce data on a monthly basis What tool should an administrator use to meet this requirement?",
        "options": [
          "Data export service",
          "Reporting snapshot",
          "Import wizard",
          "Scheduled report"
        ],
        "correct_indices": [
          0
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "ADM201 Examen 5",
    "questions": [
      {
        "id": 5001,
        "question_text": "Universal Containers uses a custom field on the account object to capture the account credit status. The sales team wants to display the account credit status on opportunities. Which feature should a system administrator use to meet this requirement?",
        "options": [
          "Roll-up summary field",
          "Workflow field update",
          "Lookup field",
          "Cross-object formula field"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5002,
        "question_text": "What should an administrator consider when setting up Case Feed?",
        "options": [
          "Case Feed replaces the standard case detail page by default",
          "Case Feed requires the Service Cloud User feature license",
          "Chatter Feed tracking must be enabled for the case object",
          "The Use case Feed permission is automatically active for all profiles"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 5003,
        "question_text": "Universal Containers has two sales groups. Each group has its own unique sales process. How can an administrator ensure that sales representatives have Access to only the stages relevant to their sales process when working on opportunities?",
        "options": [
          "Roles",
          "Record Types",
          "Multi-select picklists",
          "Page Layouts"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5004,
        "question_text": "What should be considered when configuring the lead converssion process?",
        "options": [
          "Standard lead fields are automatically converted to account, contact, and opportunity fields",
          "Roll-up summary lead fields can be mapped to custom contact fields",
          "Custom lead fields can be mapped to custom object fields",
          "Custom lead fields can be mapped to account, contact, and opportunity fields"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 5005,
        "question_text": "When the multiple currencies feature is enabled, what currency is used as the basis for all currency conversion rates?",
        "options": [
          "Personal currency",
          "Active currency",
          "Corporate currency",
          "Record currency"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 5006,
        "question_text": "Universal Containers has activated Web-to-Case on their corporate website. IT configured Auto-Response to thank the customer for logging the case and activated Assignment Rules based on the state (USA) in which the customer resides. Case ownership is therefore determined and routed to the corresponding queue – North, South, East, or West. Customer Cases that do not meet the existing criteria should be assigned to Queue – World. What solution will satisfy this requirement?",
        "options": [
          "In Case Support Settings, change Default Case Owner to Queue – World",
          "In an Active Case Flow, change the name of the Queue to World",
          "Using a Trigger, change the owner of Cases outside the US to Queue – World",
          "Using a Workflow Rule, change the owner of new Cases outside the US to Queue – World"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5007,
        "question_text": "Under which three conditions should a validation rule be used to prevent invalid data?",
        "options": [
          "When records are submitted using web-to-lead",
          "When records are updated by a workflow rule",
          "When records are edited and saved by a user",
          "When records are deleted by a user",
          "When records are imported"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 5008,
        "question_text": "The sales team at Universal Containers wants an easy solution to gather customer requirements and share presentations with their customers. Which two actions should an administrator take to help the sales team achieve this goal?",
        "options": [
          "Create opportunity teams for customers",
          "Use Chatter files to share presentations",
          "Add customers to private Chatter groups",
          "Add customers to libraries"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 5009,
        "question_text": "A System Administrator needs to build a dashboard that is accesible by the entire sales team. The running user must be set to the VP of Sales. What is the correct data source for the dashboard components?",
        "options": [
          "Custom report from the Sales Reports custom public folders",
          "Custom report from the My Personal Custom Reports folder",
          "Standard report from the Opportunity Reports folder",
          "Standard report from Administrative Reports folder"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5010,
        "question_text": "Universal Containers has three different support groups. Each group Works cases for their región only. How can the System Admin ensure that all the Support Representatives whithin each región can manage cases generated from only their región in a private org?",
        "options": [
          "Create a queue for each región",
          "Create a Support Representative role for each región",
          "Create a predefined case team for each región",
          "Create a territory members for each región"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5011,
        "question_text": "Universal Containers needs to synchronize data between Salesforce and an external financial system. What should an administrator do to accomplish this?",
        "options": [
          "Use the data loader to upsert Salesforce records into the financial system",
          "Use the Excel connector to export records from both systems into Excel",
          "Use the data loader to match records between the systems",
          "Use an external ID field to match records between the systems"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5012,
        "question_text": "The administrator at Universal Containers will create a custom field to track a specific Tier 2 Support user on a case record. What data type should be used when creating this custom field?",
        "options": [
          "Hierarchical relationship",
          "Lookup filter",
          "Lookup relationship",
          "Formula"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5013,
        "question_text": "Universal Containers uses web-to-case to convert support requests submitted through its website into cases. The support team would like Salesforce to automatically send an email containing password reset instructions to the customer when the case subject contains the words “forgot” and “password” What does the administrator need to configure to meet this requirement?",
        "options": [
          "Auto-response rule",
          "Support settings",
          "Validation rule",
          "Email-to-case"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5014,
        "question_text": "Which two types of record Access should an administrator grant through sharing rules?",
        "options": [
          "Read/Write/Delete",
          "Read/Write/Transfer",
          "Read Only",
          "Read/Write"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 5015,
        "question_text": "A user responsable for managing and creating campaigns is unable to create a new campaign, even though the user’s profile has the “Create” profile permission for Campaigns. How should an administrator grant the correct Access to the user?",
        "options": [
          "Create a campaign sharing rule to grant Access to the user",
          "Select the Marketing User checkbox on the user record",
          "Assign the user to the standard Marketing User profile",
          "Grant the user delegated administration rights to campaigns"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5016,
        "question_text": "Which two statements are correct regarding an approval process?",
        "options": [
          "The approval history related list can be used to track the process",
          "An assignment rule defines the approver for each process step",
          "A delegated approver can reassign approval requests",
          "An approval action defines the result of record approval or rejection"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 5017,
        "question_text": "Which three options are available when customizing a report?",
        "options": [
          "Add a gauge component",
          "Add a grouping",
          "Summarize fields",
          "Add a filter",
          "Schedule a refresh time"
        ],
        "correct_indices": [
          1,
          2,
          3
        ]
      },
      {
        "id": 5018,
        "question_text": "Which three fields are available in Locale Settings on the User Record?",
        "options": [
          "Language",
          "Time zone",
          "Currency",
          "Email Encoding",
          "Locale"
        ],
        "correct_indices": [
          0,
          1,
          4
        ]
      },
      {
        "id": 5019,
        "question_text": "Support agents at Universal Containers research solutions to customer issues by asking various subject matter experts (SMEs) at the Company. Which three features will allow Support Agents to quickly document the details of these meetings?",
        "options": [
          "Case groups",
          "Workflow Email Alerts",
          "Case Comments",
          "Events",
          "Case Feed"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 5020,
        "question_text": "A System Administrator needs to import new leads from a tradeshow and assign ownwership based on country. Some of the leads may already be in the system. Which two actions should be taken to meet this requirement?",
        "options": [
          "Create an auto-response rule to assign leads by country",
          "Use the Data Import Wizard to match lead by email",
          "Use the Data Loader to match lead by email",
          "Create an assignment rule to assign leads by country"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 5021,
        "question_text": "Which three setting are controlled by a user’s profile?",
        "options": [
          "Assigned apps",
          "Field-level security",
          "Record type assignment",
          "Feature license assignment",
          "Locale settings"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 5022,
        "question_text": "Which two chart types should be used to display summary values from two different levels of grouping in a report?",
        "options": [
          "Stacked bar chart",
          "Donut chart",
          "Funnel chart",
          "Grouped line chart"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 5023,
        "question_text": "When case assignment rules are being set up, in which two places should cases be assigned?",
        "options": [
          "Profile",
          "Contact",
          "User",
          "Queue"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 5024,
        "question_text": "Universal Containers wants to back-up Salesforce data on a monthly basis. Which tools can a System Administrator use to meet this requirement?",
        "options": [
          "Data Export Service, Data Loader, Report Export",
          "Data Export Service, Reporting Snapshot, Einstein Analytics",
          "Data Loader, Reporting Snapshot, Report Export",
          "Data Loader, Scheduled Report, Reporting Snapshot"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5025,
        "question_text": "Which three types of customization should be done on Activities (tasks and events)?",
        "options": [
          "Validation Rules",
          "Field Tracking",
          "Workflow Rules",
          "Custom Fields",
          "Assigment Rules"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 5026,
        "question_text": "Which statement about products and Price books is true?",
        "options": [
          "A product can have a different list Price in different Price books",
          "The standard and list Price for a product can be listed in multiple currencies",
          "Price books that contain assets cannot contain products",
          "Products without a Price are automatically added to the standard Price book"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 5027,
        "question_text": "Which two dashboard components should display data from the summary rows of a report?",
        "options": [
          "Metric",
          "Table",
          "Chart",
          "Gauge"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 5028,
        "question_text": "What relationship can be selected in a custom report type where Accounts is the primary object and Contacts is the related object?",
        "options": [
          "Each account may or may not have related contacts",
          "Each contact must have a related account",
          "Each account must not have related contacts",
          "Each contact may or may not have a related account"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5029,
        "question_text": "Which three are Chatter features?",
        "options": [
          "Bookmarks",
          "Notes",
          "Events",
          "Feeds",
          "Recommendations"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 5030,
        "question_text": "When creating a new user, which two ítems must the Administration ensure before saving the new user record?",
        "options": [
          "Username is unique across all Salesforce Orgs",
          "Username is identical to the User’s Email address",
          "Username is added to the Active User Log",
          "Username is in the format of an Email Address"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 5031,
        "question_text": "What must an administrator do when creating a record type?",
        "options": [
          "Set the field-level security for the record type",
          "Assign the record type to the appropiate profiles",
          "Create a new page layout for the record type",
          "Add the record type to the required user records"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5032,
        "question_text": "How many filters can be added to a dashboard?",
        "options": [
          "10",
          "7",
          "3",
          "5"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5033,
        "question_text": "A sales executive at Universal Containers wants to be notified whenever high- value opportunities are created for that accounts. What should an administrator do to meet this requirement?",
        "options": [
          "Create a validation rule that evaluates the account rating",
          "Create a workflow rule on the opportunity object",
          "Create an auto-response rule on the opportunity object",
          "Create an escalation rule base don the opportunity amount"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5034,
        "question_text": "Which two can be done with a workflow field update action?",
        "options": [
          "Select a formula field for a field update",
          "Change the record type of a record",
          "Apply a specific value to a field",
          "Update the value of a field on a child object"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 5035,
        "question_text": "Universal Containers sells their products to wholesale partners and retail outlets. Each process has its own set of unique sales stages. Which three features can an Administrator customize each opportunity stage?",
        "options": [
          "Type",
          "Probability",
          "Product Family",
          "Forecast Category",
          "Quota"
        ],
        "correct_indices": [
          0,
          1,
          3
        ]
      },
      {
        "id": 5036,
        "question_text": "Universal Containers organization wide defaults for Leads object are set to private. What should a sales rep see when running a lead report with the All Leads filters?",
        "options": [
          "All leads for which the sales reps have Access",
          "Only leads visible base don the folder Access",
          "Only leads owned by the sales rep",
          "All leads for which the running user of the report has Access"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5037,
        "question_text": "When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors. Which two features should an administrator use to facilitate this?",
        "options": [
          "Opportunity Dashboard",
          "Chatter groups",
          "Big deal alerts",
          "Opportunity update reminders"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 5038,
        "question_text": "Universal Containers uses a Private data Access model for Cases. Support agents own cases, and occasionally product specialist need Access to cases in their product line. Which two actions will result in the needed Access?",
        "options": [
          "Case owners manually add product specialists to ad hoc case teams",
          "Administrators configure pre-defined case teams and assignment rules",
          "A case escalation rule assigns ownership to product specialists",
          "Case owners configure pre-defined case teams"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 5039,
        "question_text": "The support group at Universal Containers wants agents to capture different information for product support and inquiry cases. In addition, the lifecycle for product support cases should have more steps than the lifecycle for inquiry cases. Which three features should an administrator use to meet these requirements?",
        "options": [
          "Field-level security",
          "Page layouts",
          "Record types",
          "Permission sets",
          "Support processes"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 5040,
        "question_text": "A Lightning for Outlook layout can be assigned to which two options?",
        "options": [
          "Profile",
          "Role",
          "Team",
          "User"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 5041,
        "question_text": "If two objects have a parent-child relationship, how can a user Access the child record from the parent record?",
        "options": [
          "Related list",
          "Lookup field",
          "Child field",
          "Custom link"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5042,
        "question_text": "Which circumstance will prevent a system administrator from deleting a custom field?",
        "options": [
          "The field is used in a report",
          "The field is used in a workflow field update",
          "The field is used in a page layout",
          "The field is part of a field dependency"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5043,
        "question_text": "Universal Containers wants to proactively alert each of its sales team users 30 days before their account renewal is due. To do this, a “required” custom account date field named “Renewals” has been created to hold the accounts’ Renewal date. The default is one year from “Create date”. A validation rule ensures the date value entered is at least 30 days into the future. An email alert and Email template has been created and is set to be delivered to the Account owner recipient. What kind of workflow action is needed to complete this requirement?",
        "options": [
          "Date-Dependent Workflow action",
          "Date-Triggered Workflow Action",
          "Time-Triggered Workflow Action",
          "Time-Dependent Workflow Action"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5044,
        "question_text": "When converting a lead, how can an administrator capture custom lead data on the converted contact?",
        "options": [
          "Use the lead conversion wizard to select the fields",
          "Use the data loader to move the custom lead data",
          "Map custom lead fields to standard contact fields",
          "Map custom lead fields to custom contact fields"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5045,
        "question_text": "Unviersal Containers wants to understand all of the configuration changes that have been made over the last six months. What tool should an Administrator use to gather this information?",
        "options": [
          "Network Access Settings",
          "Debug Log",
          "Custom Report Type",
          "Setup Audit Trail"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5046,
        "question_text": "Which two are capabilities of the content devery feature of Salesforce Content?",
        "options": [
          "Associate the content delivery with a Salesforce record",
          "Password protect content deliveries that contain sensitive data",
          "Customize the URL assigned to the content delivery",
          "Encrypt certain content delivery files"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 5047,
        "question_text": "An opportunity record, created with a close date of July 30, meets the criteria of a time-dependent workflow rule. The time-dependent action is scheduled for July 23. What happens if the opportunity is edited before July 23 and no longer meets the criteria?",
        "options": [
          "The time-dependent action will execute on July 23",
          "The time-dependent action is put on hold",
          "The time-dependent action will execute on July 30",
          "The time-dependent action is automatically removed from the queue"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5048,
        "question_text": "Which two levels of Access should be set when sharing a document folder with users?",
        "options": [
          "Read/Write/Delete",
          "Read/Write/Create",
          "Read/Write",
          "Read-only"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 5049,
        "question_text": "Which two settings can a System Administrator enable in the User Interface Setup?",
        "options": [
          "Chatter Messenger for specific users",
          "Printable list views",
          "Related list hover links",
          "Customizable recent tags"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 5050,
        "question_text": "Which two are capabilities of Customer Communities?",
        "options": [
          "Customers can view and edit contacts related to their own accounts",
          "Customers can log, view, edit and close their own cases",
          "The Customer Community can be customized with corporate branding",
          "The customer Community and its users can be created without additional licensing"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 5051,
        "question_text": "At Universal Containers, the sharing model is set to private. Sales operations, legal, and accounting users all have the Standard User profile. A person from each department will assist the Account Executive in the sales process. The sales operations and Accounting Reps need read/write Access and legal needs read-only Access to the Opportunity object. What should the Administrator do to ensure that each person has the correct Access?",
        "options": [
          "Add the users to the opportunity team",
          "Assign a custom profile to the users that need Access opportunities",
          "Create a criteria-based opportunity sharing rule for each user",
          "Manually share the account record with each user"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5052,
        "question_text": "Universal Containers wants sales reps to see the industry, annual revenue, and account owner at a glance on their mobile device. This information should be located at the top of the account record. What feature should the Administrator configure to meet this requirement?",
        "options": [
          "Mobile Card",
          "Field Set",
          "Compact Layout",
          "Page Layout"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 5053,
        "question_text": "Universal Containers is onboarding ten new employees in two weeks. Which two methods should a System Administrator use to create user records in Salesforce, without activating them?",
        "options": [
          "Create them with the User Import Wizard, and ensure that Active is unchecked",
          "Schedule a Time-Dependent Workflow to create users in two weeks",
          "Click Add Multiple Users, and ensure that Generate New Password and Notify User Inmediatly are unchecked",
          "Create a .csv file, ensure that IsActive = False, and use the data loader to insert"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 5054,
        "question_text": "What will happen when a user attempts to log in to Salesforce from an IP address that is outside the login IP range on the user’s profile but within the organization-wide trusted IP range?",
        "options": [
          "The user will be able to log in without activating the computer",
          "The user will be able to log in after the computer is activated",
          "The user will not be able to log in at all",
          "The user will be able to log in after answering a security question"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 5055,
        "question_text": "Which two ways should Knowledge articles be used?",
        "options": [
          "To display Salesforce Solutions",
          "To display for customer self-service",
          "To display Salesforce answers",
          "To resolve customer cases"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 5056,
        "question_text": "A System Administrator wants to ensure that unique data is always input into a specific field Which two field properties should be configured?",
        "options": [
          "Unique",
          "Default Value",
          "Required",
          "Data Type"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 5057,
        "question_text": "Universal Containers is using a private sharing model. The U.S. sales director needs full Access to all records owned by the U.S. sales representatives. How can this be accomplished?",
        "options": [
          "Place the U.S. sales director in queue with the U.S. sales representatives",
          "Give the U.S. sales director read/write/delte object permissions on the profile",
          "Define a role hierarchy where the U.S. sales representatives roll up to the U.S. sales director",
          "Define a role hierarchy where the U.S. sales director rolls up to the CEO"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 5058,
        "question_text": "Which three can be modified on standard object fields?",
        "options": [
          "Label",
          "Default text",
          "Picklist values",
          "Help text",
          "Field type"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 5059,
        "question_text": "Which two are purposes of the AppExchange?",
        "options": [
          "Customers can share and install apps published by Salesforce partners",
          "Administrators can download and customize pre-build dashboards and reports",
          "Partners can download accounts and contacts to collaborate on sales deals",
          "Support users can install the Salesforce Console for Service custom app"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 5060,
        "question_text": "Universal Containers requieres that the organization-wide default for opportunities be set to public read/write. However, sales users complain that opportunity reports return too many results, making it difficult to find their team’s opportunities in the report results. How can the System Administrator address this problema?",
        "options": [
          "Update the report filters",
          "Update the opportunity report Access",
          "Update the sales manager hierarchy",
          "Update the account team settings"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 5061,
        "question_text": "A marketing user has received a file of leads to import into Salesforce. What tool can be used to avoid duplicate lead records?",
        "options": [
          "Validation rules",
          "Merge leads function",
          "Data loader",
          "Data Import Wizard"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 5062,
        "question_text": "Sales management at Universal Containers needs to display the information listed below on each account record. • Amount of all closed won opportunities • Amount of all open opportunities What feature should an administrator use to meet this requirement?",
        "options": [
          "Cross-object formula fields",
          "Roll-up summary fields",
          "Workflow rules with field updates",
          "Calculated columns in the related list"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5063,
        "question_text": "Universal Containers has a custom object named Feedback which is used to capture User’s candid comments about their experiences at work. The sales team manager and all representatives have roles in the role hierarchy with sales representatives directly under the sales team manager. HR requires that all Feedback records be private to each User. Managers should not have Access to subordinates’ Feedback records What action should an Administrator take to ensure this requirement is met?",
        "options": [
          "Confirm Feedback object is set to Private and Uncheck “Enable Role Hierarchy” in Organization-wide sharing",
          "Confirm Feedback object is set to Private and Uncheck “Grant Access Using Hierarchies” in Organization-wide sharing",
          "Confirm Feedback object is set to Restricted and Uncheck “Enable Role Hierarchy” in Organization-wide sharing",
          "Confirm Feedback object is set to Restricted and Uncheck “Grant Access Using Hierarchy” in Organization-wide sharing"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5064,
        "question_text": "What does campaign influence allow a user to do?",
        "options": [
          "Adjust the percentage of influence each campaign has on an opportunity",
          "Report on the campaigns that have contributed to an opportunity",
          "View the entire campaign hierarchy",
          "Summarize campaign member statistics on a campaign"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 5065,
        "question_text": "A user is having trouble logging into Salesforce. The user’s login history shows that this person has attempted to log in multiple times and has been locked out of the organization. Which two ways should the administrator help the user log into Salesforce?",
        "options": [
          "Click Reset Password on the user’s record detail page",
          "Send an email to the user containing the user’s password",
          "Click Unlock on the user’s record detail page",
          "Log in as the user and enter a new password"
        ],
        "correct_indices": [
          0,
          2
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "ADM201 Examen 6",
    "questions": [
      {
        "id": 6001,
        "question_text": "What is a valid Organization-wide default option for the Account Object?",
        "options": [
          "Public Read/Write/Transfer.",
          "Public Read/Write/Delete.",
          "No Access.",
          "Private."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6002,
        "question_text": "A System Administrator needs to add 10 new users to Salesforce Which tool should the System Administrator use to create these new user records?",
        "options": [
          "Data Import Wizard.",
          "Add Multiple Users.",
          "Bulk Data Load Jobs.",
          "Data Loader."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 6003,
        "question_text": "A user is having a trouble logging into Salesforce. The user ́ s login history shows that this person has attempted to log in multiple times and has been locked out of the organization. Which two ways should the administrator help the user log into Salesforce?",
        "options": [
          "Send an email to the user containing the user ́ s passwords.",
          "Click Reset Password on the user ́ s record detail page.",
          "Click Unlock on the user ́ s record detail page.",
          "Log in as the user and enter a new password."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6004,
        "question_text": "Which two statements are correct regarding the Community Cloud?",
        "options": [
          "Events can be tracked with Community Calendars.",
          "Community experts must be Internal Salesforce Users.",
          "Feedback can be gathered from the Community with the Survey Component.",
          "Unanswered questions are automatically escalated to new cases."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6005,
        "question_text": "The VP of Sales at Universal Containers requested that “Verbal Agreement” is added as a new opportunity stage. The Administrator added this new picklist value to the stage field, but found that the new value was not available to users. What should the administrator do?",
        "options": [
          "Ensure the limit of 10 stage values was not exceed.",
          "Add the new value to the appropriate sales process.",
          "Add the new value to the appropriate record type.",
          "Ensure the new value was marked as active."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 6006,
        "question_text": "Which two objects records can be synced with Lightning Sync?",
        "options": [
          "Contacts.",
          "Accounts.",
          "Calendar Events.",
          "Opportunities."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6007,
        "question_text": "Which two settings can a System Administrator enable in the User Interface Setup?",
        "options": [
          "Customizable recent tags.",
          "Related list hover Links.",
          "Printable list views.",
          "Chatter Messenger for specific users."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6008,
        "question_text": "Universal Containers wants to automatically back up all Salesforce data on a monthly basis. What tool should an Administrator use to meet this requirement?",
        "options": [
          "Data export Service.",
          "Reporting snapshot.",
          "Import Wizard.",
          "Scheduled report."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6009,
        "question_text": "Which two ways should knowledge articles be used?",
        "options": [
          "To display Salesforce Solutions.",
          "To resolve customer cases.",
          "To display for customer self- Service.",
          "To display Salesforce Answers."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6010,
        "question_text": "Universal Containers has two business groups, Products and Service. Both Groups will be using opportunities to track deals, but different fields are required by each Group. In which two ways should and Administrator meet this requirement?",
        "options": [
          "Create two Page Layout.",
          "Create two lead processes.",
          "Create two record types.",
          "Create two permission sets."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6011,
        "question_text": "What relationship can be selected in a custom report type where Accounts is the primary object and contacts is the related object?",
        "options": [
          "Each Account must not have related contacts.",
          "Each contact may or may not have a related Account.",
          "Each Account may or may not have related contacts.",
          "Each contact must have a related Account."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6012,
        "question_text": "Which three permissions are set in a user ́ s profile?",
        "options": [
          "Mass Email.",
          "Active.",
          "Run Reports.",
          "Marketing User.",
          "Object Permission."
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 6013,
        "question_text": "To ensure compliance with a platinum SLA, cases that remain in the Tier – 2 queue for more than four hours must be re-assigned for the Tier- 3 queue. What feature meets this requirement?",
        "options": [
          "Auto response Rule.",
          "Case Comments.",
          "Case Escalation Rule.",
          "Case Assignment Rule"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6014,
        "question_text": "A system Administration at Universal Containers created a new Account record type. However, sales users are unable to select the new record type when creating new Account records. What are two possible reasons for this?",
        "options": [
          "The record type has not been set as the default record type.",
          "The record type has not been added to the sales user profile.",
          "The record type does not have an associated page layout.",
          "The record type has not been activated."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 6015,
        "question_text": "Where can a System Administrator assign a page layout?",
        "options": [
          "Role.",
          "Profile.",
          "App.",
          "Record Type."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 6016,
        "question_text": "Which two ways can user access Salesforce from their mobile devices?",
        "options": [
          "Install the Salesforce mobile configuration.",
          "Use the downloadable Salesforce Mobile Application.",
          "Install Salesforce Connect for mobile.",
          "Use web browser on a mobile device."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 6017,
        "question_text": "When importing data, what happens if some records do not meet the data validation criteria?",
        "options": [
          "Import process fails only for records with invalided data.",
          "Import Process ignores the data validation criteria.",
          "Import process requires user authorization to import the invalid records.",
          "Import process aborts when it encounters the first invalided record."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6018,
        "question_text": "Sales Managers wants to capture an additional email address for Contact records. What field property will ensure the proper format?",
        "options": [
          "Validation Rule.",
          "Field-level Security.",
          "Data Type.",
          "Default value."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6019,
        "question_text": "A system Administrator at Universal Containers needs to transfer records from one user to another. Which two objects should be transferred using the mass transfer tool?",
        "options": [
          "Accounts.",
          "Leads.",
          "Campaigns.",
          "Quotas."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 6020,
        "question_text": "Which two are Validation Rule Fields?",
        "options": [
          "Error Message.",
          "Owner.",
          "Error Condition Formula.",
          "Active Date."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6021,
        "question_text": "Universal Containers tracks both customer issues and user issues. A customer issue can be logged as: ● New ● Working ● Closed A issue can be logged as: ● New ● Waiting for reply ● Closed What features should a System Administrator use to track both case types?",
        "options": [
          "Support processes and record types.",
          "Process Builder and Page Layouts.",
          "Automated Case Users and workflows.",
          "Record Types and Page Layouts."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6022,
        "question_text": "Universal Containers has activated Web-to-Case on their corporate website. IT configured Auto-Response to thank the customer for logging the case and activated Assignments Rules based on the State (USA) in which the customer resides. Case ownership is therefore determined and routed to the corresponding queue: North, South, East or West. Customer cases that do not meet the existing criteria should be assigned to Queue-World. That solution will satisfy this requirement?",
        "options": [
          "Using a Trigger, change the owner of Cases outside the US to Queue-World.",
          "In an Active case Flow, change the name of the Queue to World.",
          "Using a Workflow Rule, change the owner of new Cases outside the US to Queue-World.",
          "In case support settings, change default case owner to Queue-World."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6023,
        "question_text": "Which two chart types should be used to display summary values form different levels of grouping in a report?",
        "options": [
          "Funnel Chart.",
          "Grouped line chart.",
          "Stacked bar chart.",
          "Donut chart."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6024,
        "question_text": "Which two can be done with a field update action?",
        "options": [
          "Select a formula field or a field update.",
          "Change the record type of a record.",
          "Apply a specific value to a field.",
          "Update the value of a field on a child object."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6025,
        "question_text": "Which two types of records can be transferred from one user to another user during a mass transfer of Accounts records?",
        "options": [
          "Related custom object records.",
          "Closed activities.",
          "Closed cases.",
          "Open cases."
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 6026,
        "question_text": "Universal Containers uses a private sharing model for cases. The VP of Service wants a dashboard that displays total number of cases closed by Agent and total number of open cases by Agent. The VP wants all the Agent to have access to the dashboard so they can compare their own performance against their peers. How can a System Administrator configure the dashboard?",
        "options": [
          "Set the org-wide defaults of dashboards to public read only.",
          "Save the dashboard in a folder only accessible to the Services team.",
          "Create a sharing rule to share the dashboard with role and subordinate of VP of Service.",
          "Set the running user of the dashboard as the VP of Services."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6027,
        "question_text": "Which profile permission is required for Universal Containers ́ Compliance Manager to access a copy of the org ́ s data?",
        "options": [
          "View All Data.",
          "Weekly Data Export.",
          "External Data Source Access.",
          "View Data Assessment."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6028,
        "question_text": "A Lightning for Outlook layout can be assigned to which to options?",
        "options": [
          "User.",
          "Team.",
          "Profile.",
          "Role."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6029,
        "question_text": "What does campaign influence allow a user to do?",
        "options": [
          "Report on the campaigns that have contributed to an Opportunity.",
          "Summarize campaign member statistics on a campaign.",
          "View the entire campaign hierarchy.",
          "Adjust the percentage of influence each campaign has on an Opportunity."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6030,
        "question_text": "Which two purposes of the AppExchange?",
        "options": [
          "Administrators can download and customize pre-built dashboards and reports.",
          "Support users can install the Salesforce Console for Service custom app.",
          "Customers can share and install apps published by Salesforce Partners.",
          "Partners can download Accounts and contacts to collaborate on sales deals."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6031,
        "question_text": "When case assignment rules are being to set up, in which two places should cases be assigned?",
        "options": [
          "Queue.",
          "User.",
          "Contact.",
          "Profile."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 6032,
        "question_text": "Universal Containers requires that the organization-wide default for opportunities be set to public read/write. However, sales users are complaining that Opportunity reports return too many results, making it difficult to find their team ́ s opportunities in the report results. How can the system Administrator address this problem?",
        "options": [
          "Use the field filter to filter report results and reduce records returned.",
          "Move the Opportunity reports into each user ́ s personal report folder.",
          "Update the sharing rules to limit user Access to certain opportunities.",
          "Move the Opportunity reports into a folder with restricted Access."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6033,
        "question_text": "Which three types of customization should be done on Activities (tasks and events)? 3 Answers.",
        "options": [
          "Validation rules.",
          "Assignment Rules.",
          "Workflow Rules.",
          "Custom Fields.",
          "Field Tracking."
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 6034,
        "question_text": "Which two features licenses can be assigned to a user record in Salesforce?",
        "options": [
          "Service Cloud User.",
          "Opportunity User.",
          "Knowledge User.",
          "Console User."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6035,
        "question_text": "Which two should an Administrator consider when configuring workflow rules?",
        "options": [
          "Rules can be evaluated when records are created or edited.",
          "Rules must be deactivated before using the Data Import Wizard.",
          "Rule actions can take place immediately or can be time based.",
          "All existing records are evaluated when a new rule is activated."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6036,
        "question_text": "When custom fiscal year is enabled, which two statements apply?",
        "options": [
          "The custom fiscal year cannot be disabled.",
          "The custom fiscal year automatically updates product schedules.",
          "The custom fiscal year must be defined manually.",
          "The defined custom fiscal year only affects forecasts."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 6037,
        "question_text": "Universal Containers has a marketing team set up as a public Group. A Sales Representative would like to engage the marketing team on one Opportunity. What should the sales representative do to ensure the marketing team can Access the Opportunity?",
        "options": [
          "Add the public Group to an Opportunity queue.",
          "Change the Opportunity owner to the public Group.",
          "Add the public Group to the Opportunity team.",
          "Manually share the record with the Public Group."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6038,
        "question_text": "What setting on a profile makes a tab not accessible on the All Tabs page or visible in any app, but still allows a user to view records that would normally be found under this tab?",
        "options": [
          "Tab Settings.",
          "App Permissions.",
          "Object Permissions.",
          "Org-Wide Defaults."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6039,
        "question_text": "When converting a lead, how can an Administrator capture custom lead data on the converted contact?",
        "options": [
          "Use the data loader to move the custom lead data.",
          "Use the lead conversion wizard to select the fields.",
          "Map custom lead fields to standard contact fields.",
          "Map custom lead fields to custom contact fields."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6040,
        "question_text": "A case is created from a web form. If no active assignment rules exist, who will assigned ownership?",
        "options": [
          "Default Workflow User.",
          "Automated Case User.",
          "Default Case Owner.",
          "System Administrator."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6041,
        "question_text": "Which two ways can a System Administrator manage access to an email template folder?",
        "options": [
          "Roles.",
          "Profiles.",
          "Users.",
          "Public Groups."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 6042,
        "question_text": "When using sharing rules, which two ways can records be shared?",
        "options": [
          "Queues.",
          "Roles and subordinates.",
          "Public Groups.",
          "Profiles."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6043,
        "question_text": "If two objects have a parent-child relationship, how can a user access the child record from the parent record?",
        "options": [
          "Custom Link.",
          "Child field.",
          "Related list.",
          "Lookup field."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6044,
        "question_text": "How can an Administrator allow all internal users to view a dashboard as a Sales Manager within a Sales region?",
        "options": [
          "Create a dashboard to run as the logged-in user.",
          "Create a dashboard for all opportunities in the region.",
          "Create a dashboard with multiple components.",
          "Create a dashboard to run as a specific user"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6045,
        "question_text": "A time-dependent action is placed in the workflow queue when the record is created. Which two scenarios will cause the action to be removed from the queue?",
        "options": [
          "When a validation rule is triggered for the record.",
          "When the action is deleted from the workflow queue.",
          "When the record no longer matches the rule criteria.",
          "When another record triggers the same workflow rule."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6046,
        "question_text": "Universal Containers wants support agents skilled in a particular product line to own cases directly after customers log them from an automated channel. What features meets this requirement?",
        "options": [
          "Workflow field update.",
          "Case Team Routing.",
          "Assignment Rules.",
          "Case Escalation Rules."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6047,
        "question_text": "A user profile has login hour restrictions set to Monday through Friday, 8:00",
        "options": [
          "m. to 5:00 p.m. The user logged in at 4:30 p.m. on a Tuesday and it is now 5:01 p.m. What application behavior should the user expect? A. The user will be logged out and any unsaved work-in-process will be lost.",
          "The user will be able to continue working, but will be unable to star any new sessions.",
          "The user will be logged out and any unsaved work-in-process will be saved.",
          "The user will be able to continue working and start new sessions."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 6048,
        "question_text": "What should be considered when configuring the lead conversion process?",
        "options": [
          "Custom lead fields can be mapped to Account, Contact and Opportunity fields.",
          "Custom lead fields can be mapped to custom object fields.",
          "Roll-up summary lead fields can be mapped to custom contact fields.",
          "Standard lead fields are automatically converted to Account, contact, and Opportunity fields."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 6049,
        "question_text": "The sales team at Universal Containers wants an easy solution to gather customer requirements and share presentations with their customers. Which two actions should an Administrator take to help the sales team achieve this goal?",
        "options": [
          "Add customers to libraries.",
          "Create Opportunity teams for customers.",
          "Use Chatter files to share presentations.",
          "Add customers to private Chatter groups."
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 6050,
        "question_text": "Universal Containers wants to create a custom object to capture Account survey data. Users must be able to select an Account from the survey record and view related surveys on the Account record. Which two actions should the system Administrator take to meet these requirements?",
        "options": [
          "Add the Account related list to the survey page layout.",
          "Create a lookup relationship field on the survey object.",
          "Add the survey related list to the Account page Layout",
          "Create a lookup relationship field on the Account object."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6051,
        "question_text": "Which three are Chatter features?",
        "options": [
          "Bookmarks.",
          "Feeds.",
          "Recommendations.",
          "Events.",
          "Notes ."
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 6052,
        "question_text": "How should a system Administrator prevent a user from logging in if they are a running user of a dashboards?",
        "options": [
          "Change user profile to Read Only.",
          "Deactivate the user.",
          "Delete the user.",
          "Freeze the user."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6053,
        "question_text": "The support team at Universal Containers wants to be more proactive about renewing support plans with customers. They would like the support representative dedicated to each Account to be notified a month before the account ́ s support plan expires. What should an Administrator configure to meet this requirement?",
        "options": [
          "Workflow rule.",
          "Assignment rule.",
          "Auto-response rule.",
          "Escalation rule."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6054,
        "question_text": "What will happen when a user attempts to log in to Salesforce from an IP Address that is outside the login IP range on the user ́ s profile but within the organization-wide trusted IP range?",
        "options": [
          "The user will be able to log in without activating the computer.",
          "The user will be able to log in after the computer is activated.",
          "The user will be able to log in after answering a security questions.",
          "The user will not be able to log in at all."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6055,
        "question_text": "When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors. Which two features should an Administrator use to facilitate this?",
        "options": [
          "Big deal alerts.",
          "Opportunity Dashboard.",
          "Opportunity update reminders.",
          "Chatter groups."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 6056,
        "question_text": "Which two ways allow a sales user to relate an Opportunity to a campaign?",
        "options": [
          "Select the campaign record type when creating the Opportunity.",
          "Select the primary campaign source for the Opportunity.",
          "Use the campaign influence related list on the Opportunity.",
          "Use the campaign hierarchy related list on the Opportunity."
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 6057,
        "question_text": "Universal Containers has two sales groups. Each Group has its own unique sales process. How can an Administrator ensure that sales representative have access to only the stages relevant to their sales process when working on opportunities?",
        "options": [
          "Page Layout.",
          "Roles.",
          "Multi-select picklist.",
          "Record types."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6058,
        "question_text": "Which two components are populated with data from the grand total of a custom report?",
        "options": [
          "Metric.",
          "Gauge.",
          "Table.",
          "Chart."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 6059,
        "question_text": "What must an Administrator do when creating a record type?",
        "options": [
          "Assign the record type to the appropriate profiles.",
          "Create a new page layout for the record type.",
          "Set the field-level security for the record type.",
          "Add the record type to the required user record."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6060,
        "question_text": "Universal Containers uses a private sharing model for the Contact Object. Sales reps enter new contacts into Salesforce manually. Customers are complaining that multiple sales reps are contacting them. Data quality reports show that there are many duplicate contacts owned by different sales reps in the org. What can the System Admin do to prevent the creation of duplicate contacts?",
        "options": [
          "Change the organization wide defaults of contacts to “controlled by parent”.",
          "Create a standard contact duplicate rule that bypasses sharing rules.",
          "Remind the sales reps to search for the contact before they create a new record.",
          "Create a sharing rule to share all contacts with role and subordinate of Sales VP."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 6061,
        "question_text": "Which statement about products and Price books is true?",
        "options": [
          "Price books that contain assets cannot contain products.",
          "Products without a Price are automatically added to the standard Price book.",
          "A product can have a different list Price in different Price books.",
          "The standard and list Price for a product can be listed in multiple currencies."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 6062,
        "question_text": "Which two capabilities of the content delivery feature of Salesforce Content?",
        "options": [
          "Associate the content delivery with a Salesforce Record.",
          "Password protect content deliveries that contain sensitive data.",
          "Customize the URL Assigned to the content delivery.",
          "Encrypt certain content delivery files."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 6063,
        "question_text": "Which three options are available when customizing a report?",
        "options": [
          "Add a grouping.",
          "Summarize fields.",
          "Add a gauge component.",
          "Add a filter.",
          "Schedule a refresh time."
        ],
        "correct_indices": [
          0,
          1,
          3
        ]
      },
      {
        "id": 6064,
        "question_text": "What type of field can Administrators use when creating a junction object?",
        "options": [
          "Master-detail.",
          "Formula.",
          "Text area.",
          "Look-up."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 6065,
        "question_text": "Which two options are available when using the process visualizer for approvals?",
        "options": [
          "View Approval processes as a Flow chart.",
          "Add approval steps from the process visualizer.",
          "Edit the criteria used to trigger the approval process.",
          "Share annotated approval process diagrams. Respuestas"
        ],
        "correct_indices": [
          0,
          3
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "ADM201 Examen 7",
    "questions": [
      {
        "id": 7001,
        "question_text": "Universal Containers tracks both customer issues and user issues. A customer issue can be logged as: ● new ● working ● closed A user issue can be logged as: ● new ● waiting for reply ● closed What features should a System Administrator use to track both case types?",
        "options": [
          "Record Types and Page Layouts.",
          "Process Builder and Page Layouts.",
          "Support processes and record types.",
          "Automated Case Users and workflows."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7002,
        "question_text": "The administrator at Universal Containers will create a custom field to track a specific Tier 2 Support user on a case record. What data type should be used when creating this custom field?",
        "options": [
          "Hierarchical relationship",
          "Formula",
          "Lookup filter",
          "Lookup relationship"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7003,
        "question_text": "The VP of Sales is using Collaborative Forecasting to track sales rep quote attainment. The VP wants to be notified when sales reps move the Opportunity Stage backward in the sales process. Which features should the System Administrator use?",
        "options": [
          "Field History Tracking report",
          "Validation Rule",
          "Big Deal Alert",
          "Workflow rule"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7004,
        "question_text": "As part of a Salesforce Stakeholder meeting, the CTO of Universal Containers asks the System Administrator to provide information for Total Salesforce Licenses, Used Licenses, and Remaining Salesforce licenses. Where would a System Administrator find this information?",
        "options": [
          "users",
          "Profiles",
          "Critical Updates",
          "Company Information"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7005,
        "question_text": "Users in separate departments are able to see and edit different fields on Opportunities. The Sales team can edit all fields on the Opportunity while the Support team has read-only access to these fields. Where is field-level security controlled for users on these teams?",
        "options": [
          "Profile",
          "Role",
          "Sharing Rules",
          "Public Groups"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7006,
        "question_text": "Previous Universal Containers sales representatives worked on approximately 200 Accounts with the billing addresses in New York. These sales representatives need to retain viewing and editing access to these accounts for 1-3 months. How can a System Administrator easily provide View and Edit access to these users for the 200 accounts?",
        "options": [
          "Create a new Account Sharing Rule for the Sales Representative Profile with criteria bases on Billing State equals New York.",
          "Create a new Profile for these users with criteria based on Billing State equals New York.",
          "Create a new Account folder for these users with criteria based on Billing State equals New York.",
          "Create a new Account Sharing Rule for these users with criteria based on Billing State equals New York."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7007,
        "question_text": "Universal Containers has just restructured its Sales Department. Records that the sales manager expects to see are NOT shoowing up in the new Opportunity Report. Which three questions should the Administrator ask to troubleshoot this issue?",
        "options": [
          "Do the records the sales manager expects to see match the filter criteria?",
          "Are records still being shared with the sales manager?",
          "Do owners of all records have Roles and correct Territory Assigments?",
          "Did the sales manager start from a copy or clone of an existing report?",
          "Have the owners of the records been frozen?"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 7008,
        "question_text": "What does campaign influence allow a user to do?",
        "options": [
          "Report on the campaigns that have contributed to an Opportunity.",
          "Adjust the percentage of influence each campaign has on an Opportunity.",
          "Summarize campaign member statistics on a campaign.",
          "View the entire campaign hierarchy."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7009,
        "question_text": "Universal Containers is having a quality control problem with one of its product lines. Which standard object can be used to track the extent of the problem?",
        "options": [
          "Case",
          "Opportunity",
          "Product",
          "Account"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7010,
        "question_text": "Marketing has requested that the System Administrator update contacts with a spreadsheet of email addresses obtained from the company website. Which set of fields are required to update the contact with the new email address using the Data Import Wizard?",
        "options": [
          "Account ID and User ID",
          "Account ID and Contact ID",
          "Account Name and Contact Name",
          "Account ID and Contact Email Address"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7011,
        "question_text": "Marketing wants to brand the Salesforce Mobile app to match Universal Containers approved company colors and graphics. Which set of Salesforce Mobile app branding options is available to the Administrator?",
        "options": [
          "Individual Page Colors and multiple Loading Page Logos",
          "Loading Page Color, Action Colors, and Loading Page Logo",
          "Tab Colors, Action Colors, and Loading Page Logo",
          "Brand Color, Loading Page Color and Loading Page Logo"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7012,
        "question_text": "Which three can be modified on standard object fields?",
        "options": [
          "Picklist values",
          "Default text",
          "Label",
          "Help text",
          "Field type"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 7013,
        "question_text": "All Salesforce users at Universal Containers are using the predefined actions. Several new actions have been created for different departments and are waiting to be assigned to the users in these departments. Where does a System Administrator override the predefined actions, create a new customized set of actions, and assign the new customized action layout?",
        "options": [
          "Global Actions",
          "Record Types",
          "Permission Sets",
          "Publisher Layouts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7014,
        "question_text": "What are two considered when configuring the lead conversion process?",
        "options": [
          "Custom lead fields can be mapped to account, contact, and opportunity fields.",
          "Roll-up summary lead fields can be mapped to custom contact fields.",
          "Standard lead fields are automatically converted to account, contact, and opportunity fields.",
          "Custom lead fields can be mapped to custom object fields."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 7015,
        "question_text": "Sales reps are supposed to create a record on a child object of Opportunities called Survey Request when an Opportunity is moved to Closed Won. The VP of Sales Operations has indicated that this doesn’t always happen or the rep doesn’t populate all fields correctly. The system administrator has been asked to remove permissions from Sales to create these records and automate record creation. What tool should be used?",
        "options": [
          "Visual Flow",
          "Process Builder",
          "Approvals",
          "Workflow"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 7016,
        "question_text": "Universal Containers (UC) has a Web-to-Case form on its Lightning Customer Community. UC wants to separate Cases into the following product categories: Corrugated Paper, Fiberboard, and Metal. UC has added a picklist field to store this data. How can the Case be automatically placed in the correct queue upon submission?",
        "options": [
          "Create an Escalation Rule entry for each picklist value and set to zero minutes.",
          "Create Record Types for each picklist value and assign to each product team’s profile.",
          "Create Assignment Rules based on the picklist values to move Cases to a Queue.",
          "Create Record Type for each picklist value and a Business Process to move each Case to the correct Queue."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7017,
        "question_text": "Universal Containers has decided to offer a partner its products at a discounted rate applied to all opportunities. What should the Administrator do to make sure that the appropriate prices are applied to products on opportunities for this partner?",
        "options": [
          "Create a custom object for the discounted products.",
          "Create a new list price on the Standard Price Book.",
          "Create a custom Price Book with the discounted list prices.",
          "Create a new discount Record Type on the Products object."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7018,
        "question_text": "Universal Containers has Public Read/Write Organization-Wide Default Sharing for Accounts. Company leadership has decided that Marketing should never modify an Account record. What should the System Administrator do to restrict these users?",
        "options": [
          "Separate the Marketing role hierarchy from the Sales role hierarchy.",
          "Change Organization-Wide Default Sharing to Public Read Only.",
          "Assign a permission set to Marketing users which removes Edit permission.",
          "Remove Edit access on Accounts from the custom Marketing profile."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7019,
        "question_text": "High-priority accounts at Universal Containers have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative. Management wants to prevent these accounts from being contacted accidentally multiple times on the same day, and they want to report on the various customer interactions. How should the Administrator meet these requirements?",
        "options": [
          "Type comments into the Notes section on the Account.",
          "Log a separate Task, Call, or Activity on the Account.",
          "Log a case on the Account.",
          "Post customer interactions in Chatter on the Account."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 7020,
        "question_text": "The sales team at Universal Containers wants an easy solution to gather customer requirements and share presentations with their customers. Which two actions should an Administrator take to help the sales team achieve this goal?",
        "options": [
          "Add customers to private Chatter groups.",
          "Use Chatter files to share presentations.",
          "Create opportunity teams for customers.",
          "Add customers to libraries."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 7021,
        "question_text": "What should an administrator consider when setting up Case Feed?",
        "options": [
          "Case Feed requires the Service Cloud User feature license.",
          "The Use case Feed permission is automatically active for all profiles.",
          "Chatter Feed tracking must be enabled for the case object",
          "Case Feed replaces the standard case detail page by default."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7022,
        "question_text": "A Sales Manager wants all Sales Users in the department to see a Dashboard that displays Total Closed/won Opportunity Amount by User on the monthly basis. The Opportunity sharing model is private. How can the Administrator meet this requirement?",
        "options": [
          "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboard Folder.",
          "Create the Dashboard from Opportunities by the User Report, then saved it in the shared Dashboard Folder as a Dynamic Dashboard.",
          "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report, select “View Dashboard as Me” and save in the shared Dashboard Folder.",
          "Create the Dashboard from the Opportunities by User Report, select the Sales Manager as RunAs User and Save in the private Dashboard Folder."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7023,
        "question_text": "A time-dependent action is placed in the workflow queue when the record is created. Which two scenarios will cause the action to be removed from the queue?",
        "options": [
          "When the record no longer matches the rule criteria.",
          "When another record triggers the same workflow rule.",
          "When the action is deleted from the workflow queue.",
          "When a validation rule is triggered for the record."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 7024,
        "question_text": "A Lightning for Outlook layout can be assigned to which two options?",
        "options": [
          "User",
          "Profile",
          "Role",
          "Team"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 7025,
        "question_text": "The warehouse manager has received a new product line of containers. Management wants a spreadsheet of new products and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool should the System Administrator use to meet this request?",
        "options": [
          "Data Loader",
          "Mass Create Records",
          "Data Import Wizard",
          "Mass Transfer Records"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7026,
        "question_text": "A System Administrator has set up a new user. How long does the user have to activate the account before the email link expires by default?",
        "options": [
          "30 days",
          "5 days.",
          "10 days",
          "7 days"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7027,
        "question_text": "Universal Containers wants to decrease call volume for the support team by creating a self-service community that will host published articles with FAQ information and provide a chat with support reps. Which two features meet these requirements?",
        "options": [
          "Live Agent",
          "SOS",
          "Content",
          "Knowledge"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 7028,
        "question_text": "Under which three conditions should a validation rule be used to prevent invalid data?",
        "options": [
          "When records are imported.",
          "When records are edited and saved by a user.",
          "When records are updated by a workflow.",
          "When records are deleted by a user.",
          "When records are submitted using web-to-lead."
        ],
        "correct_indices": [
          0,
          1,
          4
        ]
      },
      {
        "id": 7029,
        "question_text": "How can a new System Administrator quickly provide access to adoption reports and dashboards for manager?",
        "options": [
          "Log a case to Salesforce Support.",
          "Build reports and dashboards.",
          "Use the Salesforce Auto-Report Builder.",
          "Search the AppExchange for free adoption reports app."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7030,
        "question_text": "What describes the capabilities of Salesforce Knowledge?",
        "options": [
          "A knowledge base that use AI to generate an article to solve customer support issues.",
          "An automated AI tool that converts Leads to Opportunities given a predefined set of conditions.",
          "A knowledge base composed of articles that can be written and used by support agents.",
          "An automated tool that closed Cases based on historical information"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7031,
        "question_text": "A system Administration at Universal Containers created a new Account record type. However, sales users are unable to select the new record type when creating new Account records. What are two possible reasons for this?",
        "options": [
          "The record type has NOT been set as the default record type.",
          "The record type has NOT been activated.",
          "The record type does NOT have an associated page layout.",
          "The record type has NOT been added to the sales user profile."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 7032,
        "question_text": "Users are trying to create Opportunities and are receiving error when populating a custom picklist field. When users select either of the two values in the picklist, they receive different errors messages above the field and are NOT able to save the Opportunities. What is the likely cause of the error?",
        "options": [
          "The users don’t have access to the Large Enterprise Record Type.",
          "The users don’t have access to the picklist field.",
          "The two picklist values are unavailable to the Record Type.",
          "There are contradicting validation rules on the picklist field."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7033,
        "question_text": "How can an Administrator capture custom lead data on the converted contact when converting a lead?",
        "options": [
          "Map custom lead fields to custom contact fields.",
          "Use the lead conversion wizard to select the fields.",
          "Map custom lead fields to standard contact fields.",
          "Use the data loader to move the custom lead data."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7034,
        "question_text": "Which set of small and large backup methods are available in native Salesforce?",
        "options": [
          "Report Exports, Weekely Data Export Service, and Data Loader Exports.",
          "Mass Exports, Weekly Data Export Service, and Data Loader Exports.",
          "Mass Exports Wizard, Weekly Data Exports Service, and Data Loader Exports.",
          "Dashboard Exports, Reports Exports, and Weekly Data Export Service."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7035,
        "question_text": "What are two good use cases for a Salesforce approval process?",
        "options": [
          "A sales process that involves approvals for all Opportunities by a Sales VP where a Sales VP is allowed to delegate their approval to someone else.",
          "A sales process where the approval manager is randomly assigned from a public group of managers and a second approval by the Sales VP.",
          "A sales process where the first level approval can be denied and automatically routed to the Sales VP for final approval.",
          "A sales process that involves approval to a queue member for all Opportunities and an additional approval by a Sales VP for Opportunities over a certain amount."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 7036,
        "question_text": "Universal Containers is onboarding ten new employees in two weeks. Which two methods should a System Administrator use to create user records in Salesforce, without activating them?",
        "options": [
          "Create them with the User Import Wizard, and ensure that Active is unchecked",
          "Create a .csv file, ensure that IsActive = False, and use the data loader to",
          "Click Add Multiple Users, and ensure that Generate New Password and Notify User Inmediatly are unchecked",
          "Schedule a Time-Dependent Workflow to create users in two weeks"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 7037,
        "question_text": "Universal Containers has a small group of users of Lightning Experience. Select report folders are shared with these users. How can the System Administrator prevent these users from customizing the information in the reports?",
        "options": [
          "Run the report as specified user.",
          "Lock report filters.",
          "Use Custom Reports Types.",
          "Modify Field Level Security."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 7038,
        "question_text": "When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors. Which two features should an Administrator use to facilitate this?",
        "options": [
          "Big deal alerts.",
          "Chatter groups.",
          "Opportunity update reminders.",
          "Opportunity Dashboard."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 7039,
        "question_text": "Universal Containers uses Accounts in its Sales process but only some users have access to them. New users require Read access Accounts. Two of the new users require Edit access as well. How should an Administrator configure access for the new users?",
        "options": [
          "Create a profile to grant Account Edit access and a Permission Set to restrict Read access to specific users.",
          "Create a sharing rule for Account View access and another sharing rule for Edit access to specific users.",
          "Create a profile to grant Account View access and a Permission Set to grant Account Edit access to specific users.",
          "Create a Permission Set to grant Account Edit access to specific users and modify the Standard User profile"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7040,
        "question_text": "What will happen when a user attempts to log in to Salesforce from an IP Address that is outside the login IP range on the user ́ s profile but within the organization-wide trusted IP range?",
        "options": [
          "The user will be able to log in after the computer is activated.",
          "The user will be able to log in without activating the computer.",
          "The user will be able to log in after answering a security question.",
          "The user will not be able to log in at all."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7041,
        "question_text": "Universal Containers has a marketing team set up as a public Group. A Sales Representative would like to engage the marketing team on one opportunity. What should the sales representative do to ensure the marketing team can access the opportunity?",
        "options": [
          "Add the public Group to an opportunity queue.",
          "Change the opportunity owner to the public group.",
          "Manually share the record with the public group.",
          "Add the public Group to the Opportunity team."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7042,
        "question_text": "To ensure compliance with a platinum Service Level Agreement, cases that remain in the Tier 2 queue for more than four hours must be re-assigned for the Tier 3 queue. Which feature meets this requirement?",
        "options": [
          "Case Assignment Rule",
          "Auto response Rule",
          "Case Comments",
          "Case Escalation Rule"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7043,
        "question_text": "Universal Containers wants support agents skilled in a particular product line to own cases directly after customers log them from an automated channel. Which features meets this requirement?",
        "options": [
          "Case Escalation Rules",
          "Case Team Routing",
          "Assignment Rules",
          "Workflow field update"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7044,
        "question_text": "Universal Containers just acquired a new company whose Sales team has a unique sales process with stages that are different than currently set up in Salesforce. To make sure the acquisition runs smoothly, the Executive team does NOT want the new Sales team to have to change their process at all. What should the Administrator do to incorporate the new Sales team’s process?",
        "options": [
          "Create new values for the Opportunity Stage field and order them so that the new Sales team’s values are at the bottom of the picklist.",
          "Create new values for the Opportunity Stage field and use field-level security to control which team see which fields.",
          "Create a Record Type and a page layout for the new Sales team and a custom field for the new Stages.",
          "Create new values for the Opportunity Stage field and create a new Sales Process assigned to a custom Record Type for the new Sales team."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7045,
        "question_text": "An administrator is creating a new user. Which two aspects should be considered when creating the username?",
        "options": [
          "Username is unique across all Salesforce Orgs.",
          "Username is identical to the User’s Email address.",
          "Username is added to the Active User Log.",
          "Username is in the format of an Email Address."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 7046,
        "question_text": "What setting on a profile makes a tab NOT accessible on the All Tabs page or visible in any app, but still allows a user to view records that would normally be found under this tab?",
        "options": [
          "Tab Settings",
          "App Permissions",
          "Org-Wide Defaults",
          "Object Permissions"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7047,
        "question_text": "What happens if some records do NOT meet the data validation criteria when importing data?",
        "options": [
          "Import process aborts when it encounters the first invalided record.",
          "Import process fails only for records with invalid data.",
          "Import Process ignores the data validation criteria.",
          "Import process requires user authorization to import the invalid records."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 7048,
        "question_text": "What are two capabilities of the content delivery feature of Salesforce Content?",
        "options": [
          "Associate the content delivery with a Salesforce Record.",
          "Password protect content deliveries that contain sensitive data.",
          "Customize the URL Assigned to the content delivery.",
          "Encrypt certain content delivery files."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 7049,
        "question_text": "Users CANOT save email templates in the “Unfiled Public Email Templates” folder. How could a System Administrator allow users to save email templates to this folder?",
        "options": [
          "Go to the profile of each user and check the box for Manage Public Templates.",
          "Go to the email templates and manually share each with the Profile of specific users.",
          "Go to the user record and check the box for Manage Public Templates.",
          "Go to the email templates and manually share each with the specific users."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7050,
        "question_text": "The service department at Universal Containers wants its agents to capture and display different information on Case records based on whether customers are calling in with a complaint, question, or product suggestion. Which three features should the System Administrator use to fulfill this requirement?",
        "options": [
          "Support processes",
          "Record types",
          "Page layouts",
          "Permission sets",
          "Field-level security"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 7051,
        "question_text": "Campaign Member can be associated with which two objects?",
        "options": [
          "Lead",
          "Account",
          "Contact",
          "Opportunity"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 7052,
        "question_text": "Sales representatives at Universal Containers often schedule in-person meetings at customer offices. Management wants to track activities for this meeting category to clearly display customer office meetings in the Account, Contact, or Opportunity page layouts, as well as adding this data to reports. Which method should a System Administrator use to solve this business request?",
        "options": [
          "Have the user manually enter the meeting details in the Account Comments.",
          "Add a new value to the Type field on Accounts, Contacts, and Opportunities.",
          "Have the user manually enter the meeting details in the Description field on Accounts, Contacts, and Opportunities.",
          "Add a new value to the Type field on Tasks used for Accounts, Contacts and Opportunities."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 7053,
        "question_text": "A Salesforce Administrator is creating a new user. What should the Administrator consider when selecting the Username?",
        "options": [
          "It must be alphanumeric and unique to the organization.",
          "It must be alphanumeric and unique across all Salesforce organizations.",
          "It must look like an email address and be unique across all Salesforce organizations.",
          "It must look like an email address and be unique to the organization."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 7054,
        "question_text": "Which two dashboards components are populated with data from the grand total of a custom report?",
        "options": [
          "Metric",
          "Gauge",
          "Table",
          "Chart"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 7055,
        "question_text": "In which two locations can a System Administrator assign a page layout?",
        "options": [
          "Role",
          "Profile",
          "App",
          "Record Type"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 7056,
        "question_text": "Universal Containers (UC) wants to customize basic Salesforce Reports using Ligthning Experience. In which two ways can Reports be customize?",
        "options": [
          "Add a chart.",
          "Add a filter.",
          "Add a Lightning Component.",
          "Add links to external pages."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 7057,
        "question_text": "An opportunity record with a close date of July 30 meets the criteria of a time-dependent workflow rule. The time-dependent action is scheduled for July 23. What happens if the opportunity is edited before July 23 and no longer meets the criteria?",
        "options": [
          "The time-dependent action is automatically removed from the queue.",
          "The time-dependent action will execute on July 23.",
          "The time-dependent action will execute on July 30.",
          "The time-dependent action is put on hold."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7058,
        "question_text": "An Administrator needs to create a Sales Process for a new product. What are three considerations for this process?",
        "options": [
          "An Opportunity Record Type will need to be created and assigned to the Sales Process.",
          "The Record Type’s Page Layout is assigned to Users through their Profile assignments.",
          "The Record Type Name assignment becomes permanent upon Save of a new Record Type.",
          "Adding a new value to the Record Type Master Picklist Value List adds the value to all existing Record Type picklist.",
          "All Picklist values on the Page Layout must be added to the Master picklist Value List or be active values."
        ],
        "correct_indices": [
          0,
          1,
          4
        ]
      },
      {
        "id": 7059,
        "question_text": "Universal Containers has created a new custom object called Regulations that is a child of the Account object. All users want to view Regulations when viewing Accounts with the Sales Account Page Layout How should a Salesforce Administrator provide access to Regulations on the Sales Account Page Layout?",
        "options": [
          "Add a new related list for Regulations to the Sales Account Page Layout.",
          "Add a new action for Regulations to the Sales Account Page Layout.",
          "Add a new section for Regulations to the Sales Account Page Layout.",
          "Add a new custom link for Regulations to the Sales Account Page Layout."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 7060,
        "question_text": "Sales representatives use a custom report type for Account reports. New fields have created on the Account Object. What should a System Administrator do to report on the newly created fields?",
        "options": [
          "Create a new account report and add the new fields from the Report Builder.",
          "From the Custom Report Type, Edit Object Relationships, then add the new fields to the report.",
          "From the Custom Report Type, Edit Layout, then add the new fields to the report.",
          "Create a new account report folder, go to share, and then add the new fields."
        ],
        "correct_indices": [
          2
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "ADM201 Examen 8",
    "questions": [
      {
        "id": 8001,
        "question_text": "Universal Containers wants to track Invoice Payments on an Opportunity Related List. Only the Finance Team should see this Related List; however, all Users should be able to view Invoice Payment reports. How should the System Administrator implement this requirement?",
        "options": [
          "Set the Invoice Payment Org-Wide Sharing Settings to Private.",
          "Build an Invoice Payment report with a Running User of Finance.",
          "Create a new Page Layout and Profile for the Finance Team.",
          "Only grant Finance access to the Invoice Payment object."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8002,
        "question_text": "Which two functions can be customized for the Salesforce Mobile App?",
        "options": [
          "Custom objects",
          "Field permissions",
          "Object Record Types",
          "Navigation Menu content",
          "Object Compact layout"
        ],
        "correct_indices": [
          3,
          4
        ]
      },
      {
        "id": 8003,
        "question_text": "What are two Initial Submission Actions in an Approval Process?",
        "options": [
          "A task can be assigned to users in a specific Profile.",
          "The value of a field on the record can be updated.",
          "The record is locked for everyone except the Owner.",
          "An outbound message can be sent to another application."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 8004,
        "question_text": "Universal Containers wants to create a field to store credit card numbers and needs to make sure the information is protected. Which two actions allow the System Administrator to provide enhanced security for this field?",
        "options": [
          "Update Field-Level Security settings.",
          "Configure different Page Layouts for users.",
          "Use different Record Types for users.",
          "Create an Encrypted Text field."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8005,
        "question_text": "What are two benefits of using Data Categories with. Salesforce Knowledge?",
        "options": [
          "Articles can be classified into groups.",
          "Article Owners can track views.",
          "Articles can be referenced in Chatter posts.",
          "Article access can be controlled."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8006,
        "question_text": "Universal Containers uses a custom object within the product development team. Product development, executives, and System Administrators. should be the only users with access to records of this object. Product development needs read/write access to all the records within the object, while the executives should only be able to view the records. How can the System Administrator configure the security model to meet these requirements?",
        "options": [
          "Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product Development Profile Read, Create, Edit permissions; give the Executive Profile Read Only permissions for that object.",
          "Set the Organization-Wide Defaults for the custom object to Private; give the Product Development Profile Modify All for the object; give the Executive Profile View All access.",
          "Set the Organization-Wide Defaults for the custom object to Public Read Write; create a Read Only Sharing Rule to share alt records in. the object with the Executive Public Group.",
          "Set the Organization-Wide Defaults for the custom object to Private; add the Executive users to the default team for the object; add the default team to all the records."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8007,
        "question_text": "Universal Containers uses a private sharing model for Cases. Each product line has several product specialists who want to have visibility to all Cases involving their product line. How should the System Administrator meet this requirement?",
        "options": [
          "Create an owner-based Case Sharing Rule to share corresponding Cases with the product specialist role.",
          "Create a pre-defined Case Team for each group of product specialists and assign the team using Case Assignment Rules.",
          "Change the Org-Wide Default for Cases to Controlled By Parent and add product specialists to Account Teams.",
          "Add the product specialists to the Account Team for each Account that has purchased a product from the product line."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8008,
        "question_text": "Universal Containers uses a private data access model. Product managers and sales representatives are in different branches of the role hierarchy. What should an Administrator do to ensure that product managers can report on opportunities in their product line?",
        "options": [
          "Create a new role for product managers and sales representatives.",
          "Create a sharing rule based on criteria.",
          "Move all product managers to a role below the sales representatives.",
          "Save all opportunity reports in a public folder."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8009,
        "question_text": "Universal Containers created a Time-Based Workflow rule that sends a follow-up email to the customer two days after a Case is closed. The System Administrator wants to verify that the workflow functions correctly. Which queue should the System Administrator view to monitor pending Workflow Actions?",
        "options": [
          "Time-Based Workflow Queue",
          "Mass Email Queue",
          "Outbound Messaging Delivery Queue",
          "Background Jobs Queue"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8010,
        "question_text": "Which two User Interface settings should be used to allow users, with all required profile permissions, to edit records in List Views?",
        "options": [
          "Enable Enhanced Profile List Views",
          "Enable Enhanced Lists",
          "Enable Inline Editing",
          "Enable Enhanced Page Layout Editor"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 8011,
        "question_text": "How should a sales rep create an all-day event in Salesforce?",
        "options": [
          "Ensure the event is scheduled for times within the Start and End of Day hours.",
          "Check the all-day event checkbox on the event.",
          "Ask the System Administrator to check all-day events in the Activity settings.",
          "Use a task for an all-day event because then no time fields are needed."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8012,
        "question_text": "Which two parameters are configured using Locale settings?",
        "options": [
          "Business Hours and Holidays",
          "Time and Number Display format",
          "First/Last Name and Date format",
          "Phone Number and Currency format"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 8013,
        "question_text": "The Universal Containers CEO does not want to see the list of Contacts when viewing an Account page, but still needs to access Contact records. How should a System Administrator configure this?",
        "options": [
          "Remove Read access permissions for Contacts from the CEO's Profile.",
          "Create an Account page layout without the Contacts Related List.",
          "Set the Contact Org-Wide Default Sharing Settings to Private.",
          "Remove the Account Related List from the Contact page layout."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8014,
        "question_text": "What should a System Administrator do to temporarily prevent a User from logging into Salesforce?",
        "options": [
          "Reset the User's password.",
          "Freeze the User's Account.",
          "Delete the User's Account.",
          "Change the User's Login Hours."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8015,
        "question_text": "What should a System Administrator do first to troubleshoot login error messages?",
        "options": [
          "Log in as the user to view the error message.",
          "Check the user's login history related list.",
          "Review entries in the Setup Audit Trail.",
          "Search the debug log for the error message."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8016,
        "question_text": "In which situation is the Case Contact notified when a support representative adds a new case comment?",
        "options": [
          "The System Administrator enables Case Comment Notification to Contacts.",
          "The System Administrator configures the Case Auto-Response Rules.",
          "The Support Representative uses the Send Email Action on the Case Feed.",
          "The Support Representative posts the comment to the Case Chatter Feed."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8017,
        "question_text": "Which two changes are tracked in the Setup Audit Trail?",
        "options": [
          "Using the Data Import Wizard",
          "Creating a List View",
          "Using the Data Loader",
          "Resetting a User's password"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8018,
        "question_text": "Which report should a System Administrator use to display the number of Contacts related to an Account?",
        "options": [
          "Summary report with a Roll-up Summary Account field",
          "Summary report with a report formula",
          "Tabular report with a Roll-up Summary Account field",
          "Tabular report with a report formula"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8019,
        "question_text": "Universal Containers has a complex sales process with multiple record types, each shared with all Profiles. Some users complain about the Record Type selection screen when creating new Opportunities. Which two actions should the System Administrator take to allow these users to bypass choosing a Record Type?",
        "options": [
          "Remove the Record Type field from the users' Page Layout.",
          "Remove Record Types from the users' Profiles.",
          "Remove Record Types from the users' Sales Process.",
          "Instruct users to update the Default Record Type in My Settings."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 8020,
        "question_text": "Universal Containers regularly imports Accounts from an external order system that has its own ID field for each record. What should the System Administrator do to help prevent duplicates during these imports?",
        "options": [
          "Use VLOOKUP to find matching records in Salesforce.",
          "Use the ID from the order system in place of the Salesforce ID.",
          "Create a formula field that identifies matches.",
          "Create a unique External ID field on Accounts in Salesforce for matching."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8021,
        "question_text": "Universal Containers wants internal support requests to be directed to any of the IT representatives. They want external support requests to be directed to customer support representatives based on the contact's location. What should the System Administrator use to set this up?",
        "options": [
          "Assignment Rules and Queues",
          "Auto-responses Rules and Profiles",
          "Automated Notifications and Groups",
          "Territory Management and Teams"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8022,
        "question_text": "Which two features should the System Administrator use to assign ownership of a Lead to the appropriate product team using the custom Lead field Product Interest?",
        "options": [
          "Assignment Rules",
          "Lead Teams",
          "Escalation Rules",
          "Queues"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8023,
        "question_text": "The marketing team is asked to provide branding and messaging for email templates to be used throughout the customer support process. In which two locations can the System Administrator implement customer-facing email templates with respect to Cases?",
        "options": [
          "Owner Assignment Notifications",
          "Case Auto-response Rules",
          "Support Rep's Send Email options",
          "Case Escalation Notifications"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 8024,
        "question_text": "Which two actions allow the System Administrator to limit Chatter access during roll-out to a subset of Salesforce users?",
        "options": [
          "Edit a Profile to “Enable Chatter” for the subset of users.",
          "Add the subset of users to the company-wide Chatter group.",
          "Create a Permission Set with the “Enable Chatter” permission for the subset of users.",
          "Create an email invitation for the subset of users."
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 8025,
        "question_text": "Universal Containers wants Sales Reps to process credit card payments when an Opportunity is Closed Won. Which approach should the System Administrator use to enable this feature?",
        "options": [
          "Build a standard Visualforce page and Salesforce site.",
          "Add payment detail custom fields to the Opportunity,",
          "Create a Workflow Rule Email Alert to notify Finance.",
          "Install an AppExchange credit card payment package."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8026,
        "question_text": "The sales Operations team notices an increase in Opportunities without Products. Which configuration change should the System Administrator make to help Sales Reps remember to add Products to every Opportunity?",
        "options": [
          "Set the Org-Wide Defaults for Price Books to Use and Products to Read Only.",
          "Create a related list to enable the user to view the related products.",
          "Enable the Opportunity setting to prompt users to add products to opportunities.",
          "Create a Workflow Rule on the Opportunity object to add a default Product to Opportunities with no Products."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8027,
        "question_text": "Which configuration option shows sales representatives the fields they must fill in prior to saving an Opportunity?",
        "options": [
          "Dependent Picklist Fields",
          "Field-level Security",
          "Page Layout required fields",
          "Opportunity Validation Rules"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8028,
        "question_text": "The customer support team wants to use a different Page Layout when closing a Case. Which method should the System Administrator use to fulfill this request?",
        "options": [
          "Case Close Page Layout",
          "Support Process",
          "Record Type and Page Layout",
          "Field-Level Security"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8029,
        "question_text": "Which Salesforce capability allows customers to vote on new product features?",
        "options": [
          "Ideas",
          "Knowledge",
          "Articles",
          "Answers"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8030,
        "question_text": "Customers complain that they do not know when. Comments have been added to their Cases. Which configuration can a System Administrator implement to address this concern?",
        "options": [
          "Enable Case Comment Notification to Contacts.",
          "Configure Feed Tracking for Case Comments.",
          "Configure the Case Auto-Response Rules.",
          "Create a Workflow Rule Email Alert on Case Comments."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8031,
        "question_text": "Which feature tracks how often a file is viewed?",
        "options": [
          "Content Deliveries",
          "Email Attachments",
          "Chatter Files",
          "Document Reports"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8032,
        "question_text": "Universal Containers has a team of Account Managers that requested email alerts any time an Opportunity or Case is created on Accounts. that they own. What is the minimum number of workflows needed to accomplish this task?",
        "options": [
          "Four workflow rules for create and update on Opportunities and Accounts",
          "Two workflow rules with one email alert each",
          "One workflow rule with two email alerts",
          "No workflow rules, but two email alerts"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8033,
        "question_text": "When a user account is deactivated, what happens to the associated license?",
        "options": [
          "The license is removed from the billable licenses for the organization.",
          "The license is automatically assigned to another user.",
          "The license becomes available for reassignment.",
          "The license is listed as Inactive."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8034,
        "question_text": "Universal Containers has an Auto-response rule to send emails when a customer submits a new Case and an Assignment rule to determine case ownership for new Cases. In addition, the Case object has validation rules to ensure that each Case includes values for all fields needed by its owner to resolve the Case. Workflow Rules and Escalation Rules ensure that a support manager is properly notified when a Case remains unresolved for too long. In what order does Salesforce process the immediate actions associated with Workflow Rules and related business automations for a newly created record?",
        "options": [
          "Validation rules, Escalation rules, Assignment rules, Auto-response rules, Workflow rules",
          "Workflow rules, Validation rules, Assignment rules, Escalation rules, Auto- response rules",
          "Validation rules, Assignment rules, Auto-response rules, Workflow rules, Escalation rules",
          "Escalation rules, Validation rules, Workflow rules, Auto-response rules, Assignment rules"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8035,
        "question_text": "What is a benefit of using a Lookup Filter instead of a Validation Rule?",
        "options": [
          "Faster page refresh on the Salesforce Mobile App",
          "Improves user efficiency when selecting a related record",
          "Adds the ability to edit multiple records from list views",
          "Better error messages when an incorrect record is selected"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8036,
        "question_text": "Universal Containers uses a hybrid sharing model where Accounts and Contacts are Read Only and Opportunities and Cases are Private. Account Executives (AE) own all the Accounts. Some Contacts are owned by AEs, and other Contacts are owned by support reps. How should the System Administrator ensure the AEs can edit all the Contacts associated with their Accounts, no matter who owns the Contact?",
        "options": [
          "Select the edit all associated contacts option for the AE Role in the Role Hierarchy.",
          "Create a read/write Sharing Rule to share all related Contacts with the Account owner.",
          "Account owner privileges give the AE edit access to all related records by default.",
          "Use the Mass Transfer Tool to transfer ownership of all Contacts to the AES."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8037,
        "question_text": "Which configuration action should be performed to ensure every Case gets assigned to a valid Owner?",
        "options": [
          "Create a Validation Rule based on the Created By field.",
          "Define the Default Case Owner in Support Settings.",
          "Configure a default value for the Case Owner field.",
          "Create a Workflow Rule that checks for a blank Owner field."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8038,
        "question_text": "At Universal Containers, the sales managers would like Opportunities that have NOT been updated in the past 30 days to automatically be flagged. How should a System Administrator implement this requirement?",
        "options": [
          "Add a formula to the default value of the Opportunity name field to turn the background red if the record meets the criteria.",
          "Create a formula field to calculate the time since last update and display an image of a red flag if it meets the defined criteria.",
          "Create a formula field to show the Last Login date of the Owner and display an alert message if it meets the defined criteria.",
          "Add a formula to the default value of the Last Modified Date field to turn the text red if the record meets the criteria."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 8039,
        "question_text": "How can multiple Campaign records be associated with a single Opportunity?",
        "options": [
          "Primary Campaign Source",
          "Campaign Members",
          "Campaign Influence",
          "Campaign Hierarchy"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8040,
        "question_text": "Which two standard objects are related to Account records?",
        "options": [
          "Opportunities",
          "Campaigns",
          "Cases",
          "Leads"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 8041,
        "question_text": "Support Representatives at Universal Containers want the same Technical Engineer group to be associated with each new Case. What should a System Administrator define to implement this requirement?",
        "options": [
          "Case Assignment Rule to associate the Case Team",
          "Workflow Rule to add the Case Team",
          "Default Case Team on each User's record",
          "Default Case Team on each Account record"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8042,
        "question_text": "How should a System Administrator ensure that a Picklist field's values display in consistent colors on all reports?",
        "options": [
          "Configure Report Conditional Highlighting for each value.",
          "Create a Formula field that defines the color for each value.",
          "Update the Picklist field and set the color for each value.",
          "Use a Bucket field that defines the color for each value."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8043,
        "question_text": "What is the maximum number of components that can be added to a single Dashboard?",
        "options": [
          "15",
          "50",
          "3",
          "20"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8044,
        "question_text": "Universal Containers created a new custom object to track Inventory items. The Support Team cannot see the Inventory object's tab. Which two settings should the System Administrator check to find the cause of the problem?",
        "options": [
          "Support Team Profiles",
          "Inventory object Page Layouts",
          "Inventory object Sharing Settings",
          "Support Team Permission Sets"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8045,
        "question_text": "A system Administrator will use the Import Wizard to update existing Account records. Which values can the Import Wizard use to find matching records?",
        "options": [
          "Address field",
          "Parent Account field",
          "Account Name and Site fields",
          "Created By field"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8046,
        "question_text": "Which option can be added to Outlook Publisher Layouts?",
        "options": [
          "Custom Buttons",
          "Related Lists",
          "Custom Fields",
          "Quick Actions"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8047,
        "question_text": "How can a System Administrator discover who added a field to the account page layout?",
        "options": [
          "Run an Account History report.",
          "Review the Account Last Modified By field.",
          "Download the Setup Audit Trail.",
          "Create a poll in the Admin Chatter group."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8048,
        "question_text": "Universal Containers sells through many different reseller networks. Each reseller's deals are tracked on separate opportunities. The sales manager is concerned that the pipeline report is not accurate due to multiple opportunities for the same end customer. How should the sales process be modified to ensure opportunities are not double counted in the pipeline?",
        "options": [
          "Change the forecast category to Omitted on the duplicate opportunities.",
          "Create one opportunity and use the competitors related list to track the different resellers.",
          "Enable duplicate management to prevent the creation of the duplicate opportunities.",
          "Change the amount on the duplicate opportunities to zero."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8049,
        "question_text": "Which three report charts show how many Leads are in the Marketing pipeline based on Lead Status and what percent each Lead Status. represents?",
        "options": [
          "donut chart",
          "bar chart",
          "funnel chart",
          "line chart",
          "pie chart"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 8050,
        "question_text": "Universal Containers wants to create a Workflow Rule to send an email alert to members of its Board of Directors, none of whom use. salesforce. How many of the board members can be added to a single. Email Alert?",
        "options": [
          "Up to 5 additional email addresses can be added to the Email Alert.",
          "Up to 250 additional email addresses can be added to the Email Alert.",
          "Up to 25 additional email addresses can be added to the Emall Alert.",
          "It is not possible to add additional email addresses to the Email Alert."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8051,
        "question_text": "What should the System Administrator check when users are unable to find a Custom Report Type?",
        "options": [
          "Add a button for the new Report Type to the Report Builder.",
          "Make sure the user Profile includes the Report Type.",
          "Make sure the new Report Type is deployed.",
          "Add the new Report Type to the related objects."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 8052,
        "question_text": "Universal Containers has three Account record types: Prospect, Customer, and Vendor. The Customer record type is only for Accounts that have a Closed Won Opportunity. How should a System Administrator prevent users from selecting the Customer Record Type when they create new Account records?",
        "options": [
          "Remove the Customer Record Type as an Assigned Record Type in the users' Profiles and Permission Sets.",
          "Create an Account Validation Rule that prevents new Accounts with the Customer Record Type from being saved.",
          "Create a Workflow Rule or Process to change the Record Type from Customer to Prospect.",
          "Create an Account Auto-Assignment Rule to assign the Prospect Record Type to all new Accounts."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8053,
        "question_text": "Which three reports can be used to display a list of the Top 10 Accounts on a dashboard?",
        "options": [
          "summary report without a chart",
          "summary report with a chart",
          "tabular report with Rows to Display set to 10",
          "summary report with Rows to Display set to 10",
          "tabular report with a chart"
        ],
        "correct_indices": [
          0,
          1,
          2
        ]
      },
      {
        "id": 8054,
        "question_text": "What standard object stores information about sales deals?",
        "options": [
          "Products",
          "Accounts",
          "Assets",
          "Opportunities"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8055,
        "question_text": "Which two objects can be related to Campaign Members?",
        "options": [
          "Contact Roles",
          "Contacts",
          "Partners",
          "Leads"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 8056,
        "question_text": "How should the System Administrator implement biweekly notifications for Sales Reps that include Opportunities that need attention based on the Opportunity Owner's last login, past due Opportunities, and all Opportunities that have not been updated in the last 30 days?",
        "options": [
          "Create Scheduled Reports.",
          "Create a Chatter Group.",
          "Create Scheduled Dashboards.",
          "Create Opportunity Update Reminders."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 8057,
        "question_text": "Which two best practices are recommended prior to mass-deleting records?",
        "options": [
          "Run and export a report to archive data before deletion.",
          "Create a new list view for all records that need to be deleted.",
          "Download a Setup Audit Trail for the last six months before deletion.",
          "Schedule a weekly data export and download the backup zip files."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 8058,
        "question_text": "Universal Containers has an inside sales team that only sells warranty renewals and an outside sales team that only sells products. Each type of sale captures different information and has a different sales cycle. How should the System Administrator configure Salesforce to meet these requirements?",
        "options": [
          "Create a custom Object for warranty renewals with the appropriate Sales Process.",
          "Create a Validation Rule that displays the correct Page Layout and Sales Process based on Role.",
          "Create a custom picklist field on the Opportunity to specify if it is a product or warranty sale.",
          "Create a Page Layout, Sales Process, and Record Type for each type of sale."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8059,
        "question_text": "Universal Containers has inconsistent data in its 20,000 existing Accounts and asked the System Administrator to convert all of the standard country fields to ISO codes. What method should the System Administrator use?",
        "options": [
          "List View Inline Editing",
          "Report Exports",
          "Data.com Clean",
          "Mass Update Addresses"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 8060,
        "question_text": "A System Administrator cannot share a report folder. What is a possible reason?",
        "options": [
          "Folder Sharing is not enabled for the Org.",
          "The reports in the folder only reference custom objects.",
          "The reports in the folder are already shared with other users.",
          "The folder is private. ANSWERS"
        ],
        "correct_indices": [
          3
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "ADX201 Examen 9",
    "questions": [
      {
        "id": 9001,
        "question_text": "A company needs its customer service agents to collect and display different information on case records based on whether customers are calling in with a question, product suggestion, or complaint. Which three features should the administrator used to meet this goal?",
        "options": [
          "Page layouts",
          "Field level security",
          "Support processes",
          "Permission sets",
          "Record types"
        ],
        "correct_indices": [
          0,
          2,
          4
        ]
      },
      {
        "id": 9002,
        "question_text": "Ursa Major Solar has an opportunity record with a close date of November 15, which fulfills the criteria of a time-dependent workflow rule. The time-dependent action is scheduled for November 8. The opportunity is edited before November 8, however, and no longer meets the criteria. What happens to the time-dependent action?",
        "options": [
          "It is put on hold.",
          "It will execute on November 15",
          "It is automatically removed from the queue",
          "It will execute on November 8"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9003,
        "question_text": "Ursa Major Solar needs to ensure compliance with a platinum service level agreement; therefore, cases that stay in the Tier 2 queue for longer than 4 hours must be re-assigned to the Tier 3 queue. Which Salesforce feature should be used to fulfil this requirement?",
        "options": [
          "Case assignment rule",
          "Case escalation rule",
          "Case comments",
          "Auto response rule"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9004,
        "question_text": "Ursa Major Solar's administrator created a new account record type, but when marketing users are creating new account records, they are unable to choose the new record type. What are two potential causes of this issue?",
        "options": [
          "The record type is disassociated from the page layout.",
          "The record type is deactivated",
          "The record type default setting is disabled",
          "The record type is disabled on the marketing user profile."
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9005,
        "question_text": "At Universal Containers, a user's department determines which fields the user can see and edit on opportunities. For example, users on the sales team can edit all fields on the opportunity. while users on the support team have read-only access to these fields. In which location is field-level security controlled for users on these teams?",
        "options": [
          "Public groups",
          "Profile",
          "Role",
          "Sharing rules"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9006,
        "question_text": "Ursa Major Solar is bringing a new type of solar panel to market. An administrator needs to create a sales process for this new product. What are three considerations for the administrator in this scenario?",
        "options": [
          "Adding a new value to the record type master picklist value list adds the value to all existing record type picklists.",
          "The record type name assignment becomes permanent upon save of a new record type.",
          "The record type's page layout is assigned to users through their profile assignments.",
          "An opportunity record type will need to be created and assigned to the sales process.",
          "All picklist values on the page layout must be added to the master picklist value list or be active values."
        ],
        "correct_indices": [
          2,
          3,
          4
        ]
      },
      {
        "id": 9007,
        "question_text": "Universal Containers (UC) acquired a new business and needs to import 65,000 new records into its Salesforce organization. Which tool should the administrator use to accomplish this task?",
        "options": [
          "Data Import Wizard",
          "Data Loader",
          "A third-party tool from the AppExchange",
          "Mass Transfer Records"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9008,
        "question_text": "Sales representatives at Ursa Major Solar are working on opportunities and need to see how their colleagues have effectively managed other opportunities with comparable products, competing against the same competitors. Which two features should an administrator use to allow for this?",
        "options": [
          "Opportunity Dashboard",
          "Big deal alerts",
          "Opportunity update reminders",
          "Chatter groups"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 9009,
        "question_text": "Ursa Major Solar (UMS) wants to assign a Lightning for Outlook layout. Which two options can UMS assign this layout to?",
        "options": [
          "Team",
          "Role",
          "User",
          "Profile"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 9010,
        "question_text": "Ursa Major Solar plans to offer a partner its services at a discounted rate applied to all opportunities. The administrator needs to ensure that the appropriate prices are applied to services on opportunities for this partner. What should the administrator do to achieve this goal?",
        "options": [
          "Create a custom price book with the discounted list prices.",
          "Create a new discount record type on the services object.",
          "Create a custom object for the discounted services.",
          "Create a new list price on the standard price book."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9011,
        "question_text": "Ursa Major Solar wants to use the Salesforce approval process What are two characteristics that make a sales process a good fit for the Salesforce approval process?",
        "options": [
          "There is an approval to a queue member for all Opportunities and an additional approval by a Sales VP for Opportunities over a certain amount.",
          "There are approvals for all Opportunities by a Sales VP where a Sales VP is allowed to delegate their approval to someone else.",
          "The first level approval can be denied and automatically routed to the Sales VP for final approval.",
          "The approval manager is randomly assigned from a public group of managers, and there is a second approval by the Sales VP."
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 9012,
        "question_text": "Ursa Major Solar wants all Sales Users to see a dashboard that displays Total Closed/Won Opportunity Amount by User on a monthly basis. The Opportunity sharing model is private. What should the administrator do to fulfill this request?",
        "options": [
          "Request for the Sales Manager to create the Dashboard from the Opportunities by User Report, select \"View Dashboard as Me\", and Save in the shared Dashboard Folder.",
          "Request for the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboards Folder.",
          "Create the Dashboard from the Opportunities by User Report, choose the Sales Manager as RunAs User and Save in the private Dashboard Folder",
          "Create the Dashboard from the Opportunities by User Report, then save it in the shared Dashboard Folder as a Dynamic Dashboard."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9013,
        "question_text": "Ursa Major Solar has the following environment and requirements: ● Critical, high-priority accounts have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative. ● The Sales Manager wants to prevent these accounts from being inadvertently contacted more than once on the same day ● The Sales Manager wants to report on various customer interactions. How should the administrator fulfill these requirements?",
        "options": [
          "Post customer interactions in Chatter on the account",
          "Enter comments into the notes section on the account.",
          "Log a case on the account",
          "Log a separate task call, or activity on the account"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9014,
        "question_text": "An administrator at Ursa Major Solar (UMS) needs to create a new user. When creating a username, which two considerations need to be taken in to account?",
        "options": [
          "Username is added to the Active User Log.",
          "Username matches to the User's Email address",
          "Username needs to be in the format of an Email Address",
          "Username must be unique across all Salesforce orgs"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 9015,
        "question_text": "A user at Ursa Major Solar attempts to log in to Salesforce from an IP address that is outside the login IP range on the user's profile but within the organization-wide trusted IP range What occurs as a result of this scenario?",
        "options": [
          "The user will be able to log in after the computer is activated",
          "The user Will be able to log in after answering one Security question.",
          "The user will be unable to log in at all",
          "The user will be able to log in without activating the computer"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9016,
        "question_text": "An Administrator at Ursa Major Solar is converting a lead and needs to capture custom lead data on the converted contact. What should the administrator do to accomplish this goal?",
        "options": [
          "Map custom lead fields to standard contact fields",
          "Utilize the data loader to move the custom lead data.",
          "Utilize the lead conversion wizard to select the fields.",
          "Map custom lead fields to custom contact fields."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9017,
        "question_text": "Ursa Major is onboarding 15 new employees in three weeks. The administrator needs to create user records in Salesforce without activating them. Which two methods allow the administrator to achieve this goal",
        "options": [
          "Schedule a Time-Dependent Workflow to create users in three weeks.",
          "Create them with the User Import Wizard and ensure that Active is unchecked.",
          "Create a.csv file ensuring that IsActive False and use the data loader to insert.",
          "Click Add Multiple Users and ensure that Generate New Password and Notify User Immediately are unchecked."
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 9018,
        "question_text": "A Sales executive at Universal Containers (UC) IS utilizing Collaborative Forecasting to track sales rep quote attainment and wants to be alerted when an opportunity stage is moved backward in the sales process Which feature should the administrator use to fulfill this request?",
        "options": [
          "Field History Tracking report",
          "Workflow rule",
          "Validation Rule",
          "Big Deal Alert"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9019,
        "question_text": "What are two ways to customize basic reports using Lightning Experience?",
        "options": [
          "By adding a filter",
          "By adding a chart",
          "By adding a Lightning component",
          "By adding links to external pages"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 9020,
        "question_text": "Ursa Major Solar is importing data and has many records that do NOT meet the data validation criteria. What will occur?",
        "options": [
          "The import process will abort when it encounters the first invalid record",
          "The import Process will fail, but only for the records with invalid data",
          "The import process will require user authorization in order to import the invalid records",
          "The import process will ignore the data validation criteria"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9021,
        "question_text": "Ursa Major Solar has the following environment and requirements: ● A new custom object named Regulations__c is a child of the account object. ● All users need the ability to view Regulations__c when viewing accounts with the sales account page layout. How should an administrator provide access to Regulations__c on the sales account page layout?",
        "options": [
          "By adding a new action for Regulations__c to the sales account page layout",
          "By adding a new custom link for Regulations c to the sales account page layout",
          "By adding a new section for Regulations c to the sales account page layout",
          "By adding a new related list for Regulations__c to the sales account page layout"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9022,
        "question_text": "Ursa Major Solar users want to utilize Salesforce Knowledge. Which statement accurately describes Knowledge?",
        "options": [
          "knowledge base that uses Machine Learning to generate an article to solve customer support issues",
          "An automated Machine Learning tool that converts Leads to Opportunities given a predefined set of conditions",
          "A knowledge base comprised of articles that can be written and utilized by support agents",
          "An automated tool that closes Cases based on historical information"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9023,
        "question_text": "Users at Universal Containers need the ability to save email templates in the following folder \"Unfiled Public Email Templates” Currently, users are unable to do so. Which action should an administrator take to allow users to save emails to this folder?",
        "options": [
          "Navigate to the profile of each user and check the box for manage public templates",
          "Navigate to the email templates and manually share each with the specific users",
          "Navigate to the user record and check the box for manage public templates",
          "Navigate to the email templates and manually share each with the profile of the specific users"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9024,
        "question_text": "The Support Manager wants to send an automatic email to the Case Contact when a case is closed. Which automation tool can the administrator use?",
        "options": [
          "Sharing Rule",
          "Case Auto-Response Rule",
          "Validation Rule",
          "Workflow Rule"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9025,
        "question_text": "A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool will meet this request?",
        "options": [
          "Mass Transfer Records",
          "Data Import Wizard",
          "Data Loader",
          "Mass Create Records"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9026,
        "question_text": "Ursa Major Solar (USM) has a Web-to-Case form on its Lightning Customer Community. USM wants to separate Cases into the following product categories: ● Residential ● Lots/Land ● Commercial USM has added a picklist field to store this data. How can the Case be automatically placed in the correct queue upon submission?",
        "options": [
          "Create Record Types for each picklist value and a Business Process to move each Case to the correct Queue.",
          "Create Assignment Rules based on the picklist values to move Cases to a Queue.",
          "Create an Escalation Rule entry for each picklist value and set to zero minutes.",
          "Create Record Types for each picklist value and assign to each product team's profile."
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9027,
        "question_text": "The managers at Ursa Major Solar asked the administrator to quickly provide access to sales reports and dashboards How can this be done?",
        "options": [
          "Search the AppExchange for free adoption report apps",
          "Log a case to Salesforce Support",
          "Build reports and dashboards.",
          "Use the Salesforce Auto-Report Builder."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9028,
        "question_text": "Which two actions should an administrator perform to provide a sales team with an easy solution for gathering customer requirements and sharing presentations with their customers?",
        "options": [
          "Use Salesforce Files to post presentations in Chatter",
          "Add customers to private Chatter groups",
          "Add customers to libraries.",
          "Ensure opportunity teams are created for customers"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 9029,
        "question_text": "Previous Ursa Major Solar sales representatives worked on approximately 180 accounts with billing addresses in California. These sales representatives need to retain viewing and editing access to these accounts for 1-3 months. An administrator needs to easily provide view and edit access to these users for the 180 accounts What should the administrator do to achieve this goal?",
        "options": [
          "Configure a new account sharing rule for the Sales Rep profile with criteria based on billing state equals California.",
          "Configure a new account folder for these users with criteria based on billing state equals California.",
          "Configure a new profile for these users with criteria based on billing state equals California.",
          "Configure a new account sharing rule or these users with criteria based on billing state equals California."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9030,
        "question_text": "Ursa Major Solar uses a validation rule to prevent invalid data. What are three conditions where this rule is used?",
        "options": [
          "When records are imported.",
          "When records are updated by a workflow rule.",
          "When records are submitted using web-to-lead.",
          "When records are edited and saved by a user.",
          "When records are deleted by a user."
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 9031,
        "question_text": "Ursa Major Solar has a social marketing team set up as a public group. A sales representative would like to engage the social marketing team on one opportunity. What should the sales representative do to ensure the social marketing team can access the opportunity?",
        "options": [
          "Change the opportunity owner to the public group.",
          "Add the public group to an opportunity queue",
          "Manually share the record with the public group",
          "Add the public group to the opportunity team"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9032,
        "question_text": "Ursa Major Solar (UMS) is configuring the lead conversion process. Which two factors should UMS consider before setting up the process?",
        "options": [
          "Custom lead fields can be mapped to account, contact, and opportunity fields.",
          "Roll-up Summary lead fields can be mapped to custom contact fields.",
          "Custom lead fields can be mapped to custom object fields.",
          "Standard lead fields are automatically converted to account, contact, and opportunity fields."
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 9033,
        "question_text": "Sales executives at Ursa Major Solar (USM) frequently schedule virtual and remote meetings with key customer stakeholders. USM wants to track activities for this meeting category to clearly display customer meetings in the account, contact, or opportunity page layouts, as we as adding this data to reports What should the administrator do to meet this goal",
        "options": [
          "Inform the user to manually enter the meeting details in the account comments.",
          "Add a new value to the type field on accounts, contacts, and opportunities.",
          "Inform the user to manually enter the meeting details in the description field on accounts, contacts, and opportunities.",
          "Add a new value to the type field on tasks used for accounts, contacts, and opportunities."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9034,
        "question_text": "An administrator needs to configure Ursa Major Solar's Salesforce Mobile app with the company's brand-specific images and color schemes Which set of branding options should the administrator use?",
        "options": [
          "Loading Page Color, Action Colors, Loading Page Logo",
          "Individual Page Colors, Multiple Loading Page Logos",
          "Loading Page Logo, Brand Color, Loading Page Color",
          "Tab Colors, Action Colors, Loading Page Logo"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9035,
        "question_text": "Ursa Major Solar's default, organization-wide sharing for accounts is set to public read/write. The administrator needs to ensure that marketing never modifies an account record. Which action should the administrator take to accomplish this goal?",
        "options": [
          "Switch organization-wide default sharing to public read only.",
          "Assign a permission set to marketing users which removes edit permission.",
          "Remove edit access on accounts from the custom marketing profile.",
          "Separate the marketing role hierarchy from the sales role hierarchy."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9036,
        "question_text": "Ursa Major Solar has selected report folders that are shared with a small group of users who are on Lightning Experience. The administrator needs to prevent these users from customizing the information in the reports. What should the administrator do to achieve this goal?",
        "options": [
          "Utilize Custom Report Types.",
          "Change Field Level Security",
          "Lock report filters",
          "Run the report as a specified user"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9037,
        "question_text": "In which two locations can a system administrator assign a page layout?",
        "options": [
          "Role",
          "Profile",
          "App",
          "Record Type"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9038,
        "question_text": "At Ursa Major Solar, Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object. An administrator needs to report on the newly created fields. What should the administrator do to achieve this goal?",
        "options": [
          "From the Custom Report Type, Edit Layout, then add the new fields to the report.",
          "From the Custom Report Type, Edit Object Relationships, then add the new fields to the report.",
          "Create a new account report folder, go to share, and then add the new fields.",
          "Create a new account report and add the new fields from the Report Builder."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9039,
        "question_text": "Ursa Major Solar uses data from the grand total of a Custom report to create their dashboard. Which two components will populate the grand total properly?",
        "options": [
          "Metric",
          "Chart",
          "Gauge",
          "Table"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 9040,
        "question_text": "Which three can be modified on standard fields?",
        "options": [
          "Picklist values",
          "Field type",
          "Help text",
          "Label",
          "Default text"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 9041,
        "question_text": "Sales management at Ursa Major Solar wants to allow users to create new account records with prepopulated values. Which feature should an administrator use to meet this requirement?",
        "options": [
          "Formula fields",
          "Default field values",
          "A custom button",
          "A workflow rule"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9042,
        "question_text": "Which feature should Ursa Major Solar use if they want their support agents who are skilled in a particular product line to own cases directly after customers log them from an automated channel?",
        "options": [
          "Case team routing",
          "Assignment rules",
          "Workflow field update",
          "Case escalation rules"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9043,
        "question_text": "Campaign member can be associated with which two objects?",
        "options": [
          "Account",
          "Contact",
          "Opportunity",
          "Lead"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9044,
        "question_text": "Ursa Major Solar is experiencing quality assurance issues with a product line. An administrator needs to use a standard object to track the extent of the problem. Which standard object should be used?",
        "options": [
          "Case",
          "Account",
          "Opportunity",
          "Product"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9045,
        "question_text": "Users at Ursa Major Solar are trying to create Opportunities When populating a custom picklist field, the users receive errors. Additionally, when the users select either of the two values in the picklist, they receive different error messages above the field and are unable to save the Opportunities. Why is this error likely occurring?",
        "options": [
          "The two picklist values are unavailable to the Record Type",
          "The users don't have access to the picklist field",
          "The users don't have access to the Large Enterprise Record Type.",
          "The picklist field has contradicting validation rules"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9046,
        "question_text": "Which two objects can an administrator customize the Stage Setup Flow?",
        "options": [
          "Campaigns",
          "Opportunities",
          "Campaign Members",
          "Leads"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9047,
        "question_text": "After a recent restructure of its Sales Department, Ursa Major Solar is having issues with records being omitted in the new Opportunity Report Which three questions should the administrator ask to research this issue?",
        "options": [
          "Have the owners of the records been frozen?",
          "Do owners of all records have Roles and correct Territory Assignments?",
          "Do the records the sales managers expect to see match the filter criteria?",
          "Are records currently being shared with the sales manager?",
          "Did the sales manager start from a copy or clone of an existing report?"
        ],
        "correct_indices": [
          1,
          2,
          3
        ]
      },
      {
        "id": 9048,
        "question_text": "DreamHouse Realty uses Content to store files for Marketing collateral. The Marketing VP wants the Collateral_ID_c to be required and for the ID to contain a minimum of ten characters What should an administrator suggest to meet these requirements?",
        "options": [
          "Mark Collateral_ID__c as required on the page layout",
          "Validation Rules",
          "Workflow Rules",
          "Create Collateral_ID__c as formula field"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9049,
        "question_text": "Ursa Major Solar's administrator needs to create a custom field to track a specific Tier 2 support user on a case record. What is the appropriate data type to utilize when creating this Custom field?",
        "options": [
          "Formula",
          "Hierarchical relationship",
          "Lookup filter",
          "Lookup relationship"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9050,
        "question_text": "Ursa Major Solar placed a time-dependent action in the workflow queue when the record was created. What are two situations that will cause this action to be removed from the queue?",
        "options": [
          "If another record triggers the same workflow rule",
          "If the action is deleted from the workflow queue",
          "If a validation rule is triggered for the record",
          "If the record no longer matches the rule criteria"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9051,
        "question_text": "An administrator is creating a new user What should the administrator consider when selecting the username?",
        "options": [
          "It must look like an email address and be unique across all Salesforce organizations.",
          "It must be alphanumeric and be unique across all Salesforce organizations.",
          "It must be alphanumeric and unique to the organization.",
          "It must look like an email address and be unique to the organization."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9052,
        "question_text": "The administrator at Ursa Major Solar needs to provide information for total Salesforce licenses, used licenses, and the remaining Salesforce licenses. Where in setup can this information be found?",
        "options": [
          "Profiles",
          "Company Information",
          "Critical Updates",
          "Users"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 9053,
        "question_text": "What should an administrator take into consideration when creating Content tags?",
        "options": [
          "Tags are case insensitive.",
          "Tags are updatable.",
          "Tags are case sensitive.",
          "Tags combine singular and plural versions"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9054,
        "question_text": "Sales Reps at Universal Containers want to prioritize and flag at-risk deals. What feature should an administrator suggest to meet this requirement?",
        "options": [
          "Einstein Lead Scoring",
          "Einstein Opportunity Insights",
          "Einstein Activity Capture",
          "Einstein Opportunity Scoring"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9055,
        "question_text": "Ursa Major Solar tracks both user issues and customer issues. A user issue can be logged as: ● New ● Waiting for reply ● Closed A customer issue can be logged as ● New ● Working ● Closed An administrator needs to track both case types. Which features should be used?",
        "options": [
          "Page Layouts and Process Builder",
          "Page Layouts and Record Types",
          "Workflows and Automated Case Users",
          "Record Types and Support Process"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9056,
        "question_text": "What does campaign influence allow a user to do?",
        "options": [
          "Summarize campaign member statistics on a campaign.",
          "View the entire campaign hierarchy.",
          "Adjust the percentage of influence each campaign has on an opportunity.",
          "Report on the campaigns that have contributed to an opportunity."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9057,
        "question_text": "Every Salesforce user at Ursa Major Solar uses predefined actions. Several new actions have been created for the Sales, Marketing, and of Support departments, and are waiting to be assigned to the users in these departments. An administrator needs to override the predefined actions, create a new customized set of actions, and assign the new customized action layout. Where should the administrator go to accomplish these tasks?",
        "options": [
          "Record types",
          "Permission sets",
          "Global actions",
          "Publisher layouts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9058,
        "question_text": "Which setting on a profile makes a tab NOT accessible in the All App Launcher or visible in any app, but still allows a user to view records that would normally be found under this tab?",
        "options": [
          "App Permissions",
          "Object Permissions",
          "Org-wide Defaults",
          "Tab Settings"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9059,
        "question_text": "Ursa Major Solar's support team currently has a very high call volume. They want to decrease this volume by creating a self-service community that will host published articles with Frequently Asked Questions (FAQs), and provide a chat with Help Desk representatives. Which two features should be used to fulfill this goal?",
        "options": [
          "SOS",
          "Chat",
          "Content",
          "Knowledge"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 9060,
        "question_text": "An administrator at Ursa Major Solar is setting up case feed. What should the administrator consider?",
        "options": [
          "Chatter feed tracking must be enabled for the case object.",
          "The Use Case Feed permission is automatically active for all profiles.",
          "The Service Cloud user feature license is required for case feed.",
          "By default, the case feed replaces the standard case detail page."
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 9061,
        "question_text": "Ursa Major Solar is looking into backup methods. Which set of small and large data backup methods are available in native Salesforce?",
        "options": [
          "Mass Export Wizard, Weekly Data Export Service, and Data Loader Exports",
          "Data Loader Exports, Mass Exports, and Weekly Data Export Service",
          "Report Exports, Dashboard Exports, and Weekly Data Export Service",
          "Data Loader Exports, Report Exports, and Weekly Data Export Service"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9062,
        "question_text": "Ursa Major Solar utilizes accounts in its sales process; however, not all users have access to them. New users require read access to accounts. Additionally, four new users require edit access. What should an administrator do to configure access for the new users?",
        "options": [
          "Configure a profile to grant account edit access and a permission set to restrict read access to specific users.",
          "Configure a sharing rule for account view access and another sharing rule for edit access to specific users.",
          "Configure a profile to grant account view access and a permission set to grant account edit access to specific users.",
          "Configure a permission set to grant account edit access to specific users and modify the standard user profile."
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 9063,
        "question_text": "At Ursa Major Solar, an administrator has set up a new user. The user needs to activate the account before the email link expires by default. How long does the user have before the link expires?",
        "options": [
          "14 days",
          "10 days",
          "6 days",
          "7 days"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9064,
        "question_text": "Ursa Major Solar recently acquired a company whose sales team has a unique sales process, with stages that are different from the current setup of stages in Salesforce. The Chief Technology Officer (CTO) has decided that the new sales team should NOT change their process at all. What should the administrator do to incorporate the new sales team's process?",
        "options": [
          "Create new values for the opportunity stage field and use field-level security to control which teams see which fields.",
          "Create a record type and page layout for the new sales team and a custom field for the new stages.",
          "Create new values for the opportunity stage field; order them so that the new Sales team's values are at the bottom of the picklist.",
          "Create new values for the opportunity stage field; create a new sales process assigned to a custom record type for the new sales team."
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 9065,
        "question_text": "In which two ways can users access Salesforce from their mobile devices?",
        "options": [
          "Use the downloadable Salesforce mobile application.",
          "Install Salesforce Connect for mobile.",
          "Use the Lightning Experience in web browser.",
          "Install the Salesforce mobile configuration. ANSWERS"
        ],
        "correct_indices": [
          0,
          2
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "ADM201 Examen 10",
    "questions": [
      {
        "id": 10001,
        "question_text": "The administrator at Cloud Kicks updates the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the custom report?",
        "options": [
          "Create a new report type with Event as the primary object and Contact as a related object and Contact as a related object",
          "Configure formula fields on Event to populate contact information",
          "Use a dashboard with filters to show Event and contact data as requested",
          "Edit the custom Event report type and add fields related via lookup"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10002,
        "question_text": "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
        "options": [
          "Record ID",
          "Auto-Number field",
          "Rich Text field",
          "External ID"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10003,
        "question_text": "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest?",
        "options": [
          "Test Drive in a production org",
          "Install in a sandbox",
          "Download into a Trailhead Playground",
          "Check edition compatibility"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 10004,
        "question_text": "Users at DreamHouse Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time. How should an administrator create the dashboard without changing any sharing settings?",
        "options": [
          "Update the dashboard folder settings to manager for the sales reps role",
          "Create a dashboard with the running user set as someone who can see all opportunities",
          "Add a filter to the dashboard to filter the opportunities by owner role",
          "Build individual dashboards for profiles that need to see the enterprise results"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10005,
        "question_text": "The administrator at Ursa Major has created a new record type for customer warranty Cases. Which two assignments should the administrator use to display the new record type to users?",
        "options": [
          "Profile Assignment",
          "Page Layout Assignment",
          "App Manager Assignment",
          "Role Assignment"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 10006,
        "question_text": "An administrator needs to store the ID of a record type for later use in a flow. Which kind of variable should the administrator use?",
        "options": [
          "Text variable",
          "ID variable",
          "Record variable",
          "Boolean variable"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10007,
        "question_text": "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status. Which feature should an administrator use to fulfill this request?",
        "options": [
          "Validation Rules",
          "Global Value Picklists",
          "Dependent Picklists",
          "Predefined Field Values"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10008,
        "question_text": "An administrator at Ursa Major Solar needs to send information to an external accounting system whenever an opportunity closes. What workflow action should the administrator use to accomplish this?",
        "options": [
          "Create a Record",
          "Custom Notification",
          "Assign Task",
          "Outbound Message"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10009,
        "question_text": "Northern Trail Outfitters wants to know the average stage duration for all closed opportunities. How should an administrator support this request?",
        "options": [
          "Refresh weekly reporting shapshots for Closed Opportunities",
          "Run the Opportunity Stage Duration report",
          "Use Process Builder to capture the daily average on each Opportunity",
          "Add formula fields to track Stages on each Opportunity"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10010,
        "question_text": "The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day. How should this configured?",
        "options": [
          "Assignment Rules",
          "Business hours",
          "Escalation Rules",
          "Case Queues"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10011,
        "question_text": "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
        "options": [
          "Configure an auto-response rule to email the lead",
          "Use a validation rule to trigger workflow to email the lead",
          "Add a public group and Process Builder to email the lead",
          "Create an assignment rule to email the lead"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10012,
        "question_text": "DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error. What should the administrator review to troubleshoot this request?",
        "options": [
          "Review the page layout to ensure the fields updated in the process are visible",
          "Add a delegated approver for the next approver in the process",
          "Check if the user in the next approver is inactive or missing",
          "Update the field-level security to view on fields that are updated in the process"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10013,
        "question_text": "The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup. Which scenario could prevent the administrator from fulfilling this requirement?",
        "options": [
          "The lookup field is required for saving records",
          "The lookup field in all the records contains a value",
          "A junction object is required to support the lookup",
          "Roll-up summary fields exist on the master object"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10014,
        "question_text": "Universal Containers (UC) would like to count the number of open cases associated with each Account and update the Account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
        "options": [
          "Use a scheduled flow",
          "Use a scheduled Process Builder",
          "Use a Roll-Up Summary field on Case",
          "Use a record triggered flow"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10015,
        "question_text": "Ursa Major Solar wants to know which of its marketing efforts are helping the team win opportunities. What should an administrator configure to provide these insights?",
        "options": [
          "List Email Activities",
          "Campaign Influence",
          "Campaign Hierarchy",
          "Map Custom Lead Fields"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10016,
        "question_text": "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder?",
        "options": [
          "App page",
          "User page",
          "Dashboard page",
          "Record page"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 10017,
        "question_text": "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
        "options": [
          "Lead Conversion",
          "Require Field",
          "Validation Rule",
          "Workflow Rule"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10018,
        "question_text": "The administrator at Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted a case to the administrator indicating that the new field is unavailable. Which two steps should an administrator do to troubleshoot this issue?",
        "options": [
          "Ensure that the page layout for the user’s profile has been updated",
          "Run the setup audit trail for the organization",
          "Review the field-level security of the field for the user profile",
          "Update the organization-wide defaults for the object"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 10019,
        "question_text": "Cloud Kicks has asked the administrator to test a new screen flow that creates contacts. What are two key components of testing the flow?",
        "options": [
          "Test the flow in a sandbox",
          "Use Debug to test the flow in Flow Builder",
          "Run the flow using it to create contacts",
          "Set up a flow interview to test the flow"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 10020,
        "question_text": "An administrator creates a custom text area field on the Account object and adds it to the service team’s page layout. The service team manager loves the addition of this field and wants it to appear in the highlights panel so that the service reps can quickly find it when on the Account page. How should the administrator accomplish this?",
        "options": [
          "Make the field required and move it to the top of the page",
          "Create a new page layout and a new section titled highlights panel",
          "From the page layout editor, drag the field to the highlights panel",
          "In the Account object manager, create a custom compact layout"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10021,
        "question_text": "Which item is available in a Lightning App where visibility is limited to the Salesforce mobile app?",
        "options": [
          "Utility Bar",
          "Favorites",
          "Today",
          "Home Page"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10022,
        "question_text": "Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?",
        "options": [
          "Splits",
          "Stages",
          "List Views",
          "Queues"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10023,
        "question_text": "Which three aspects of standard fields should an administrator customize?",
        "options": [
          "Field name",
          "Picklist values",
          "Field history tracking",
          "Decimal places",
          "Help text"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 10024,
        "question_text": "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
        "options": [
          "Hierarchical sharing",
          "Owner-based sharing",
          "Criteria-based sharing",
          "Use manual sharing"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10025,
        "question_text": "The administrator at AW Computing wants Account details, related lists, and Chatter feeds to each appear on separate tabs when viewing an Account. Which type of page should the administrator create?",
        "options": [
          "Lightning app page",
          "Lightning page component",
          "Lightning record page",
          "Lightning page tab"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10026,
        "question_text": "Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group’s dashboards. What could be causing reps to have inappropriate access to data on dashboards?",
        "options": [
          "Public Dashboards",
          "Dashboard Subscriptions",
          "Dynamic dashboards",
          "Dashboard Filters"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10027,
        "question_text": "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How should the administrator address this requirement?",
        "options": [
          "Set the Fiscal Year to Standard and the duration to 12 months",
          "Set the Fiscal Year to Custom and the starting month as February",
          "Set the Fiscal year to Standard and the starting month as February",
          "Set the Fiscal Year to Custom and the duration to 4 quarters"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10028,
        "question_text": "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
        "options": [
          "Utilize a flow to identify the correct queue and assign the case",
          "Create an Escalation Rule to send cases to the correct queue",
          "Use a custom email service to set the owner of the case upon creation",
          "Configure Email-to-Case so emails are delivered to the correct queue"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10029,
        "question_text": "DreamHouse Realty wants to offer a form on its Experience Cloud site where inspectors will submit findings from a property inspection. Which feature should an administrator place on the page to fulfill this requirement?",
        "options": [
          "Related List",
          "Screen Flow",
          "Autolaunched Flow",
          "Record detail"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10030,
        "question_text": "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. THe team currently does not have access to the Lead object. How should an administrator provide proper access?",
        "options": [
          "Configure permission sets",
          "Create a new profile",
          "Set up Manual sharing",
          "Assign a new role"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10031,
        "question_text": "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
        "options": [
          "View the setup audit trail",
          "Edit the page layout",
          "Log in as the user",
          "Review the sharing model"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10032,
        "question_text": "AW Computing needs to capture a loss reason in a rich text field when an opportunity is closed lost. How should an administrator configure this requirement?",
        "options": [
          "Create a validation rule to display an error if stage is closed and Loss Reason is blank",
          "Check the required checkbox on the Loss Reason field in Object Manager",
          "Select the required checkbox next to the Loss Reason field on the page layout",
          "Configure a workflow rule to display an error if Loss Reason is blank"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10033,
        "question_text": "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks What should an administrator do to meet this requirement?",
        "options": [
          "Turn on Recurring Activities",
          "Workflow rule to create recurring tasks",
          "Enable Creation of Recurring Tasks",
          "Flow to create recurring tasks"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10034,
        "question_text": "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
        "options": [
          "User licenses related list in company information",
          "Usage-based entitlements related list in company information",
          "User management settings in setup",
          "Search for licenses types in setup"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10035,
        "question_text": "When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity. Which two automation tools should an administrator use to accomplish this request?",
        "options": [
          "Workflow rule",
          "Flow Builder",
          "Process Builder",
          "Approval Process"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 10036,
        "question_text": "The sales manager at Cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should the administrator use to fulfill the requirement?",
        "options": [
          "Delegated Approver",
          "Approval History Related List",
          "Delegated Administrator",
          "Two-Step Approval Process"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10037,
        "question_text": "Cloud Kicks has created a screen flow for their sales team to use when they add new Leads. The screen flow collects name, email, and shoe preference. Which two things should the administrator do to display the screen flow?",
        "options": [
          "Use a flow element and add the screen flow to the record page",
          "Install an app from the AppExchange",
          "Add the flow in the utility bar of the console",
          "Create a tab and add the screen flow to the page"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 10038,
        "question_text": "Which tool should an administrator use to review recent configuration changes made in their org?",
        "options": [
          "Debug Logs",
          "Field History Tracking",
          "Setup Audit Trail",
          "Critical Updates"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10039,
        "question_text": "Universal Containers wants to increase the security of their org by requiring stricter user passwords. Which two of the following should an administrator configure?",
        "options": [
          "Password different than username",
          "Password complexity requirement",
          "Minimum password length",
          "Revent common words"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 10040,
        "question_text": "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request?",
        "options": [
          "A user with a manager role above the agent",
          "A user with the Manage Cases permission",
          "A user with the System Administrator profile",
          "A user Read permission on the account"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 10041,
        "question_text": "The business development at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
        "options": [
          "Approval Process",
          "Validation Rule",
          "Workflow Rule",
          "Flow Builder"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10042,
        "question_text": "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Vases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
        "options": [
          "Case Assignment Rules",
          "Case Scheduled Reports",
          "Case Escalation Rules",
          "Case Dashboard Refreshes"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10043,
        "question_text": "Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage. Which three options should the administrator use to address this need?",
        "options": [
          "Use Flow to mark fields required",
          "Use validation rules",
          "Enable guided selling",
          "Mark fields required on the page layout",
          "Configure Opportunity Path"
        ],
        "correct_indices": [
          1,
          3,
          4
        ]
      },
      {
        "id": 10044,
        "question_text": "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer’s issue. What should the administrator suggest to meet these requirements?",
        "options": [
          "Knowledge Articles",
          "Assignment Rules",
          "Auto-Response Rules",
          "Email Alerts"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10045,
        "question_text": "Ursa Major Solar uses two different page layouts for Account records. One page layout reflects the fields related to customer accounts and another page layout includes fields for partner accounts. The administrator has assigned the customer account page layout to sales and support users and the partner account layout to the partner management team. What should the administrator configure to meet this requirement?",
        "options": [
          "Use a public group and a criteria-based sharing rule to share customer accounts with the partner team?",
          "Grant create, read, edit, and delete access to customer accounts on the partner team profile",
          "Add members of the partner management team to the default Account team for the customer accounts",
          "Create one record type for customer accounts and one record type for partner accounts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10046,
        "question_text": "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address this issue?",
        "options": [
          "Create a permission set to allow users to bypass the error",
          "Use a fault connector and display a screen with text explaining what went wrong and how to correct it",
          "Uncheck the End User Flow Errors box in Setup",
          "Remove validation rules so that the users are able to proceed without complete records"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10047,
        "question_text": "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
        "options": [
          "Build the dashboards manually to meet the deadline",
          "Train someone on the sales and marketing teams to build dashboards",
          "Check the AppExchange for a prebuilt solution that can be easily customized",
          "Hire a consultant to build the custom dashboards"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10048,
        "question_text": "An administrator at Cloud Kicks wants to deactivate a user who has left the company. What are two reasons that would prevent a user from being deactivated?",
        "options": [
          "The user is in a custom hierarchy field",
          "The user is assigned in a workflow email alert",
          "The user is part of a territory hierarchy",
          "The user is the highest role in the role hierarchy"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 10049,
        "question_text": "DreamHouse Realty just announced its new Home Concierge offering. This product is unlike anything the company has offered in the past and follows a different business model. What should the administrator configure to meet this requirement?",
        "options": [
          "Create a new sales process",
          "Create a new Opportunity product",
          "Create a new approval process",
          "Create a quick action"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10050,
        "question_text": "A new sales rep at Ursa Major Solar has a qualified lead that is ready for conversion When using the Lead conversion process, which two records can be created?",
        "options": [
          "Case",
          "Contact",
          "Campaign",
          "Account"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 10051,
        "question_text": "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
        "options": [
          "Chatter Broadcast Group",
          "Chatter Recommendations",
          "Chatter Unlisted Group",
          "Chatter Stream"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10052,
        "question_text": "Northern trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly. What should the administrator do to identify the problem?",
        "options": [
          "Set up email logs and review the send error logs",
          "Review debug logs with the flow logging level",
          "View the setup audit trail and review for errors",
          "Use the native debug feature in the Flow Builder"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10053,
        "question_text": "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC’s Cases. Which two options should the administrator use to help the support team?",
        "options": [
          "Add Cases to the existing queue as available object",
          "Use assignment rules to set the queue as the owner of the case",
          "Configure a flow to assign the cases to the queue",
          "Create a new queue and add Cases as an available object"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 10054,
        "question_text": "Sales reps at Cloud Kicks want to be notified when they have a high likelihood of winning an opportunity over $1,000,000. Which feature meets this requirement?",
        "options": [
          "Performance Chart",
          "Key Deals",
          "Activity Timeline",
          "Big Deal Alerts"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 10055,
        "question_text": "Users at Cloud Kicks want to see information more useful for their role on the Case page. How should an administrator make the pages more dynamic and easier to use?",
        "options": [
          "Add component visibility filters to the components",
          "Delete the extra components from the page",
          "Remove fields from the record details component",
          "Include more tab components with filters"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10056,
        "question_text": "Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout. Which type of field should an administrator create to accomplish this?",
        "options": [
          "Cross-object formula field",
          "Master-detail relationship field",
          "Standard Account field",
          "Custom Account field"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 10057,
        "question_text": "Cloud Kicks has a custom object named Shoe. The administrator has been asked to ensure that when a relationship is created between Account and Shoe to prevent orphaned shoe records. What should the administrator do to complete this requirement?",
        "options": [
          "Create an indirect lookup",
          "Create an encrypted lookup",
          "Create a master-detail lookup",
          "Create a hierarchical lookup"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10058,
        "question_text": "An administrator has been asked to change the data type of an auto number to a text field What should the administrator be aware of before changing the field?",
        "options": [
          "Existing Auto Number field to Text is prevented",
          "Existing field values will be deleted",
          "Existing field values will remain unchanged",
          "Existing field values will be converted"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10059,
        "question_text": "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. Which two steps should the administrator configure to meet this requirement?",
        "options": [
          "Create a custom object for shoe design",
          "Configure a custom lookup field for shoe designs on the Product object",
          "Add a custom master-detail field for shoe designs on the Product object",
          "Use the standard object for designs"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 10060,
        "question_text": "An administrator at Universal Containers is reviewing current security settings in the company’s Salesforce org. What should the administrator do to prevent unauthorized access to Salesforce?",
        "options": [
          "Disable TLS requirements for sessions",
          "Enable caching and autocomplete on login page",
          "Enable multi-factor authentication",
          "Customize organization-wide defaults"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 10061,
        "question_text": "An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer. Which two automation tolls should the administrator use?",
        "options": [
          "Outbound Message",
          "Workflow Rule",
          "Process Builder",
          "Field Update"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 10062,
        "question_text": "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Closed Date, and Amount. How should the administrator export this file?",
        "options": [
          "Data Export Wizard",
          "Data Loader",
          "Data Import Wizard",
          "Data Export Service"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 10063,
        "question_text": "Cloud Kicks want to have consistency when communicating with customers on cases. The company has requested messages to be sent in an email channel with categories to help search for the proper message. Which solution should an administrator suggest to meet this requirement?",
        "options": [
          "Prebuilt Quick Texts",
          "Prebuilt Flow Templates",
          "Prebuilt Email Templates",
          "Prebuilt Auto-Responses ANSWERS"
        ],
        "correct_indices": [
          2
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "ADM201 Examen 11",
    "questions": [
      {
        "id": 11001,
        "question_text": "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should an administrator add to the dashboard to fulfill the request?",
        "options": [
          "Combination Chart",
          "Dashboard Filter",
          "Bucket Column",
          "Dashboard Component"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11002,
        "question_text": "Cloud Kicks has the organization-wide sharing default set to private on the Show object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which three items should the administrator configure to provide appropriate access to the report?",
        "options": [
          "Folder Access",
          "Report Subscription",
          "Custom Report Type",
          "Field-Level Security",
          "Role Hierarchy"
        ],
        "correct_indices": [
          0,
          3,
          4
        ]
      },
      {
        "id": 11003,
        "question_text": "The administrator at Cloud Kicks is trying to debug a screen flow that creates contacts. One of the variables in the flow is missing on the debug screen. What could cause this issue?",
        "options": [
          "The field type is unsupported by Debugging",
          "The Available for Output checkbox was unchecked",
          "The flow is an inactive version",
          "The Available for Input checkbox was unchecked"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11004,
        "question_text": "The administrator at Universal Containers wants to add branding to Salesforce Which two considerations should the administrator keep in mind?",
        "options": [
          "Themes apply to Salesforce Classic and to the Salesforce mobile app",
          "Up to 150 custom themes can be created, modified, or cloned from the built-in themes",
          "Only one theme can be active at a time, and a theme applies to the entire org",
          "Chatter external users see the built-in Lighting blue theme only"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 11005,
        "question_text": "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
        "options": [
          "Path Key Fields",
          "Workflow Rules",
          "Opportunity Processes",
          "Dynamic Forms"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11006,
        "question_text": "New leads need to be routed to the correct sales person based on the lead address. How should the administrator configure this requirement?",
        "options": [
          "Configure a validation rule",
          "Use lead assignment rules",
          "Create a formula field",
          "Assign with an escalation rule"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11007,
        "question_text": "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
        "options": [
          "Approval Process",
          "Flow Builder",
          "Prebuilt Macro",
          "Formula Field"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11008,
        "question_text": "The administrator for AW Computing is working with a user who is having trouble logging into Salesforce. What should the administrator do to identify why the user is unable to log in?",
        "options": [
          "Review the security token",
          "Review the password history",
          "Review the password policies",
          "Review the login history"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11009,
        "question_text": "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
        "options": [
          "Case Scheduled Reports",
          "Case Assignment Rules",
          "Case Escalation Rules",
          "Case Dashboard Refreshes"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11010,
        "question_text": "The administrator has been asked to automate a simple field update on the account, When a support agent changes the status of the account to “Audited”, they would like to system to automatically update the Audited Date field on the account with today’s date. Which tool should the administrator use to complete this automation?",
        "options": [
          "Approval Process",
          "Validation Rule",
          "Formula Field",
          "Flow Builder"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11011,
        "question_text": "The administrator at Ursa Major Solar has created a custom report type and built a report for the sales operations team. However, none of the users are able to access the report. Which two options could cause this issue?",
        "options": [
          "The custom report type is in development",
          "The user’s profile is missing View access",
          "The report is saved in a private folder",
          "The org has reached its limit for custom report types"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 11012,
        "question_text": "The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
        "options": [
          "Configure an owner-based sharing rule",
          "Uncheck Grant Access Using Hierarchies",
          "Define a criteria-based sharing rule",
          "Set the Default External Access to Private"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11013,
        "question_text": "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the question that is needed. How should an administrator complete this?",
        "options": [
          "Use conditional visibility to hide the unnecessary question",
          "Use a decision element and a new screen to show the proper question",
          "Use branching in the flow screen to show the proper scenario",
          "Use a new version of the flow for each scenario"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11014,
        "question_text": "Which two capabilities are considerations when marking a field as required in Object Manager?",
        "options": [
          "The field is added to every page layout on that object",
          "The field is not required to save records via the API on that object",
          "The field is universally required to save a record on that object",
          "The field is optional when saving records via web-to-lead and web-to-case"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 11015,
        "question_text": "DreamHouse Realty agents are double-booking open house event nights. The events manager wants an event submission process to help agents fill in event details and request dates. How should an administrator accomplish this request?",
        "options": [
          "Create a workflow rule to update the Event Date field",
          "Create a sharing rule so that other agents can view events",
          "Create a campaign for agents to request event dates",
          "Create an approval process on the Campaign object"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11016,
        "question_text": "An administrator at Northern Trail Outfitters is unable to add a new user in Salesforce What could cause this issue?",
        "options": [
          "The username is a fake email address",
          "The username is less than 80 characters",
          "The username is already in use",
          "The username is not a corporate email address"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11017,
        "question_text": "Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Accounts?",
        "options": [
          "Shipments should have a master detail to Accounts",
          "Accounts should have a master detail to Shipments",
          "Shipments should have a lookup to Account",
          "Accounts should have a lookup to Shipments"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11018,
        "question_text": "Cloud Kicks needs to ensure appropriate shipping details are used in Orders. Reps should have a streamlined solution to update the shipping addresses on selected Orders associated with an Account when the shipping address is changed on the Account. How should the administrator deliver this requirement?",
        "options": [
          "An autolaunched flow on the Order page that updates all open Order shipping addresses whenever the Account shipping address changes",
          "A screen flow on the Order page that lets the rep choose the updated Account shipping address changes",
          "A screen flow on the Account page that lets the rep choose the updated Account shipping address in open associated Orders",
          "An autolaunched flow on the Account page that updates all open Order shipping addresses whenever the Account shipping address changes"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11019,
        "question_text": "Which three items are available in the mobile navigation menu?",
        "options": [
          "Lightning Home Page",
          "Lightning App Pages",
          "Dashboards",
          "Utility Bar",
          "Chatter"
        ],
        "correct_indices": [
          1,
          2,
          4
        ]
      },
      {
        "id": 11020,
        "question_text": "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should an administrator ensure this requirement?",
        "options": [
          "Make the field universally required",
          "Define an approval process for the field",
          "Crate a Process Builder to set the field",
          "Require the field on the record type"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11021,
        "question_text": "The administrator at Cloud Kicks has been told that users are unable to add repeating tasks in Salesforce Which two solutions should the administrator use to ensure users are able to do this?",
        "options": [
          "Disable Shared Activities",
          "Add Create Recurring Series of Tasks field on page layouts",
          "Enable Creation of Recurring Tasks in Activity Settings",
          "Turn on Task Notifications Service"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 11022,
        "question_text": "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is “Search Engine”, the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not “Search Engine”, this picklist should be hidden. How should the administrator complete this requirement?",
        "options": [
          "Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is “Search Engine”",
          "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is “Search Engine”",
          "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is “Search Engine”",
          "Use an assignment element, one for when Lead Source is “Search Engine” and one for everything else"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11023,
        "question_text": "The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity. How should this be accomplished from the Campaign keeping the associated Campaign Member history?",
        "options": [
          "Convert the lead from the Campaign Member Detail page",
          "Delete the lead and create a new Contact and Opportunity",
          "Add a Contact from the Campaign Member Detail page",
          "Clone the lead and convert the cloned record to a Contact"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11024,
        "question_text": "Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title of CEO is created, the contact’s account record gets updated with the CEO’s name Which feature should an administrator use to implement this request?",
        "options": [
          "Validation Rule",
          "Workflow Rule",
          "Quick Action",
          "Process Builder"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11025,
        "question_text": "Cloud Kicks’ executives have noticed the Opportunity Expected Revenue field displays incorrect values. How should the administrator correct this?",
        "options": [
          "Adjust the forecast category associated with the stage",
          "Modify the closed won value associated with the stage",
          "Change the probability associated with the stage",
          "Update the expected revenue associated with the stage"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11026,
        "question_text": "The sales team at Ursa Major Solar has asked the administrator to automate an outbound message What should the administrator utilize to satisfy the request?",
        "options": [
          "Flow Builder",
          "Workflow Rule",
          "Task Assignment",
          "Process Builder"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11027,
        "question_text": "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and want to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization-wide default for Opportunity is set to Private. How should the administrator accomplish this?",
        "options": [
          "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing",
          "Create a new role for the subject matter experts and give them access to the records with an owner-based sharing rule",
          "Add the subject matter experts to a public group and give them access to the records with a criteria-based sharing rule",
          "Change the organization-wide default for Opportunity from Private to Public Read/Write to open up access for the subject matter experts"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11028,
        "question_text": "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen. How should the administrator configure the decision element?",
        "options": [
          "Use the equals operator and {$GlobalConstant.True} as the value",
          "Use the contains operator and “High Value Customer” as the value",
          "Use the contains operator and {!$GlobalConstant.False} as the value",
          "Use the equals operator and “High Value Customer” as the value"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11029,
        "question_text": "An administrator at Universal Containers needs an automated way to delete records based on field values What automated solution should the administrator use?",
        "options": [
          "Automation Studio",
          "Workflow",
          "Process Builder",
          "Flow Builder"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11030,
        "question_text": "Cloud Kicks intends to protect data with backups by using the data export service. Which two considerations should the administrator remember when scheduling the export?",
        "options": [
          "Data backups are limited to weekly or monthly intervals",
          "Data export service should be run from a sandbox",
          "Metadata backups are limited to sandbox refresh intervals",
          "Metadata backups must be run via separate process"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 11031,
        "question_text": "The administrator at Cloud Kicks needs to automatically route support cases, regardless of how they are created, to a queue based on case priority. What tool should the administrator use?",
        "options": [
          "Email-to-Case",
          "Web-to-Case",
          "Auto-Response Rules",
          "Assigment Rules"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11032,
        "question_text": "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series. How should the administrator set up the Campaign to simplify reporting?",
        "options": [
          "Use Campaign hierarchy where the monthly events roll up to a parent Campaign",
          "Configure Campaign Member Statuses to record which event Members attended",
          "Create individual campaigns that all have the same name",
          "Add different record types for the monthly event types"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11033,
        "question_text": "Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search. What option should the administrator adjust to fully restrict access?",
        "options": [
          "Permissions and tab visibility",
          "App permissions and search terms",
          "Record settings and search index",
          "Page layouts and field-level security"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11034,
        "question_text": "Northern Trail Outfitters wants to use Contact Hierarchy in its org to display Contact association. What should the administrator take into consideration regarding the Contact Hierarchy?",
        "options": [
          "Sharing settings are ignored by contacts displayed in the Contact Hierarchy",
          "Customizing hierarchy columns changes the Recently Viewed Contacts list view",
          "Contacts displayed in the Contact Hierarchy are limited to record-level access by user",
          "Contact Hierarchy is limited to only display 3000 contacts at one time"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11035,
        "question_text": "The DreamHouse Realty team has a master-detail relationship set up with Open House as the parent object and Visitors as the child object. What type of field should the administrator add to the Open House object to track the number of Visitors?",
        "options": [
          "Cross-object formula",
          "Roll-up summary",
          "Indirect lookup",
          "Multi-select picklist"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11036,
        "question_text": "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days How should the administrator complete this requirement?",
        "options": [
          "Auto-Response Rules",
          "Assignment Rules",
          "Validation Rules",
          "Escalation Rules"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11037,
        "question_text": "Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads What approach should an administrator take to meet this requirement?",
        "options": [
          "Define a record type and assign it to the interns",
          "Create a separate Lead Lightning App",
          "Set up Web-to-Lead for the intern’s use",
          "Update the active Lead Assignment Rules"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11038,
        "question_text": "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
        "options": [
          "Configure Knowledge with articles and data categories",
          "Use an interview flow to capture Case details",
          "Create a custom object to capture popular Case resolutions",
          "Direct users to Global Search to look for similar cases"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11039,
        "question_text": "Once an opportunity reaches the negotiation stage at Cloud Kicks, the Amount field becomes required for sales users. Sales managers need to be able to move opportunities into this stage without knowing the amount. How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
        "options": [
          "Configure a validation rule to meet the criteria",
          "Create a formula field to fill in the field for managers",
          "Assign the Administrator profile to the managers",
          "Make the field required for all users"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11040,
        "question_text": "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
        "options": [
          "Use a custom email service to set the owner of the case upon creation",
          "Configure Email-to-Case so emails are delivered to the correct queue",
          "Create an Escalation Rule to send cases to the correct queue",
          "Utiliza a flow to identify the correct queue and assign the case"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11041,
        "question_text": "The Cloud Kicks sales manager wants to boost productivity by providing insights for sales reps at the start of each day. Which three sales-specific standard Lightning components should an administrator add to the homepage to meet this requirement?",
        "options": [
          "Performance Chart",
          "Assistant",
          "Key Deals",
          "Activities",
          "Path"
        ],
        "correct_indices": [
          0,
          2,
          3
        ]
      },
      {
        "id": 11042,
        "question_text": "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
        "options": [
          "Field History Tracking",
          "Setup Audit Trail",
          "Security Health Check",
          "Organization-Wide Defaults"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11043,
        "question_text": "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
        "options": [
          "Create and assign a permission set that includes Read, Create, and Edit access",
          "Create and assign a custom profile with Delete access removed for each object",
          "Give the user View All access and assign them to the highest role in the role hierarchy",
          "Assign the standard System Administrator profile to the analytics user"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11044,
        "question_text": "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases. Which two solutions should an administrator use to meet this request?",
        "options": [
          "Email-to-Case",
          "Case Escalation",
          "Web-to-Case",
          "Case Queues"
        ],
        "correct_indices": [
          0,
          2
        ]
      },
      {
        "id": 11045,
        "question_text": "Universal Container’s administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-may relationship?",
        "options": [
          "Create URL fields on a custom object",
          "Create a junction with a custom object",
          "Create two lookup relationships on the new object",
          "Create two master-detail relationships on the new object"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 11046,
        "question_text": "An administrator supporting a global team of Salesforce users has been asked to configure company settings Which two options should the administrator configure?",
        "options": [
          "Login Hours",
          "Currency Locale",
          "Default Language",
          "Password Policy"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 11047,
        "question_text": "An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set Which feature should the administrator enable to meet this requirement?",
        "options": [
          "Omni-Channel",
          "Knowledge Management",
          "Escalation Rules",
          "Territory Management"
        ],
        "correct_indices": [
          0
        ]
      },
      {
        "id": 11048,
        "question_text": "What are three settings an administrator should configure to make it easy for approvers to respond to approval requests?",
        "options": [
          "Specify initial submission actions within the approval process",
          "Create a flow to automatically approve all records",
          "Update the organization’s Chatter settings to allow approvals",
          "Enable the organization’s email approval response setting",
          "Add the Items to Approve component to the approver’s home page"
        ],
        "correct_indices": [
          2,
          3,
          4
        ]
      },
      {
        "id": 11049,
        "question_text": "Universal Containers has a Contact Lightning record page with a component that shows Linkedin data. The sales team would like to only show this component to sales users when they are on their mobile phones. Which two solutions should the administrator use to fulfill this requirement?",
        "options": [
          "Filter the component visibility with View = Mobile/Tablet",
          "Filter the component with Form Factor = Phone",
          "Filter the component visibility with User > Role > Name = Sales User",
          "Filter the component visibility with User > Profile > Name = Sales User"
        ],
        "correct_indices": [
          1,
          3
        ]
      },
      {
        "id": 11050,
        "question_text": "AW Computing would like to improve its Case Lightning record page by including: ● A filtered component to display a message in bold font when a Case is saved as a critical record type ● A quick way to update the Account status from the Case layout Which two components should an administrator use to satisfy these requests?",
        "options": [
          "Related record",
          "Record detail",
          "Related list",
          "Rich text"
        ],
        "correct_indices": [
          0,
          3
        ]
      },
      {
        "id": 11051,
        "question_text": "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
        "options": [
          "Individual, User, and Account",
          "Case and Opportunity",
          "Account and User",
          "Contact, Lead, and Person Account"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11052,
        "question_text": "A user at Universal Containers left the company. The administrator needs to create a new user for their replacement, but they have assigned all available user licenses. What should the administrator do to free up a user license for the new user?",
        "options": [
          "Change the former user's record to the new user",
          "Delete the former employee’s user record",
          "Deactivate the former employee’s user record",
          "Freeze the former employee’s user record"
        ],
        "correct_indices": [
          2
        ]
      },
      {
        "id": 11053,
        "question_text": "DreamHouse Realty needs to use consistent picklist values in the Category field on Accounts and Cases, with values respective to record types. Which two features should the administrator use to fulfill this requirement?",
        "options": [
          "Dependent picklist",
          "Multi-select picklist",
          "Custom picklist",
          "Global picklist"
        ],
        "correct_indices": [
          2,
          3
        ]
      },
      {
        "id": 11054,
        "question_text": "Users at Universal Containers would like to visually see the sales stages on an Opportunity page. The administrator is configuring Path for Opportunities. Which is an important consideration for Path configuration?",
        "options": [
          "Celebrations are unable to be added to a Path",
          "Path can include guidance and key fields for each stage",
          "The Owner field ban be edited in the Key Fields Panel",
          "Kanban views for Path must be configured manually"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11055,
        "question_text": "AW Computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion. How should an administrator accomplish this request?",
        "options": [
          "Enable Account Revenue limits in Setup, with a 0 as the minimum and 100 billion as the maximum",
          "Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion",
          "Make the Account Revenue field required on the page layout",
          "Build a scheduled report displaying Accounts with Account Revenue that is negative or greater than 100 billion"
        ],
        "correct_indices": [
          1
        ]
      },
      {
        "id": 11056,
        "question_text": "The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one User. Which two options should an administrator use to meet this requirement?",
        "options": [
          "Assign permission set group to Users",
          "Create a permission set",
          "Add to manual sharing list",
          "Edit organization-wide defaults"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 11057,
        "question_text": "The administrator at Ursa Major Solar imported records into an object by mistake Which two tools should be used to undo this import?",
        "options": [
          "Data Import Wizard",
          "Mass Delete Records",
          "Data Loader",
          "Weekly Data Export"
        ],
        "correct_indices": [
          1,
          2
        ]
      },
      {
        "id": 11058,
        "question_text": "An administrator needs to create a one-to-many relationship between two objects with limited access to child records What type of field should the administrator use?",
        "options": [
          "Lookup field",
          "Roll-up summary",
          "Cross object formula",
          "Master-detail field"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11059,
        "question_text": "The sales manager at Cloud Kicks wants to set up a business process where opportunity discounts over 30% need to be approved by the VP of sales. Any discounts above 10% need to be approved by the user’s manager. The administrator has been tasked with creating an approval process. Which are two considerations the administrator needs to review before setting up this approval process?",
        "options": [
          "Populate the Manager standard field on the sales user’s User Detail page",
          "Create a custom Discount field on the opportunity to capture the discount amount",
          "Configure two separate approval processes",
          "Allow the submitter choose the approver manually"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 11060,
        "question_text": "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
        "options": [
          "Einstein Activity Capture",
          "Einstein Lead Scoring",
          "Einstein Search Personalization",
          "Einstein Opportunity Scoring"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11061,
        "question_text": "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year Which AppExchange item should help the administrator meet the request?",
        "options": [
          "Lightning Data",
          "Bolt Solutions",
          "Lightning Community",
          "Flow Solutions"
        ],
        "correct_indices": [
          3
        ]
      },
      {
        "id": 11062,
        "question_text": "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Which two tools should an administrator use to build this solution?",
        "options": [
          "Flow Builder",
          "Approval Process",
          "Validation Rule",
          "Quick Action"
        ],
        "correct_indices": [
          0,
          1
        ]
      },
      {
        "id": 11063,
        "question_text": "Cloud Kicks has a team of product owners that need a space to share feedback and ideas with just the product team. How should the administrator leverage Salesforce to help the team collaborate?",
        "options": [
          "Configure a Chatter Public Group",
          "Use Quick Actions to log communication",
          "Add Activity History to document tasks",
          "Create a Chatter Private Group Answers"
        ],
        "correct_indices": [
          3
        ]
      }
    ]
  }
];
