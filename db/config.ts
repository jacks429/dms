import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
		avatar: column.text(),
		email: column.text(),
		country: column.text(),
		status: column.text(),
  }
});

const Session = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => User.columns.id }),
    expiresAt: column.number()
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => User.columns.id }),
    content: column.text(),
  }
});

const PlatformProvider = defineTable({
  columns: {
    First_name: column.text(),
    Last_name: column.text(),
    Date_of_Birth: column.text(),
    Nationality: column.text(),
    Permanent_Residence_Long_Term_Stay: column.text(),
    Website: column.text(),
    Application_Specification: column.text(),
    Video_Sharing_Platform: column.text(),
  }
});

const Rebroadcaster = defineTable({
  columns: {
    Name: column.text(),
    Identification_Number: column.text(),
    Headquarters: column.text(),
    Legal_Form: column.text(),
    Method_of_Providing_Rebroadcasting: column.text(),
    If_Network_or_Telecommunications_Equipment_Cannot_Be_Specified: column.text(),
    Territorial_Scope_Territory_of_Rebroadcasting_Provision: column.text(),
    Participants: column.number(),
  }
});

const AVMS = defineTable({
  columns: {
    Name: column.text(),
    Trade_Name: column.text(),
    First_name: column.text(),
    Last_name: column.text(),
    Business_Address: column.text(),
    Residence: column.text(),
    Telephone_Number: column.number(),
    Email: column.text(),
    Website: column.text(),
    Ownership_Structure: column.text(),
    Ultimate_Beneficial_Owner: column.text(),
    Competence_of_Regulator: column.text(),
    Jurisdiction_of_SR: column.text(),
    Self_Regulatory_Mechanism: column.text(),
    Self_Regulatory_Body: column.text(),
    Authorization_Number: column.text(),
    Name_of_AVMS: column.text(),
    Specification_of_AVMS_Application: column.text(),
    Statement_of_Whether_It_Is_a_Community_Video_Service: column.text(),
  }
});

const Broadcaster = defineTable({
  columns: {
    Name: column.text(),
    Trade_Name: column.text(),
    First_name: column.text(),
    Last_name: column.text(),
    Business_Address: column.text(),
    Residence: column.text(),
    Telephone_Number: column.number(),
    Email: column.text(),
    Website: column.text(),
    Ownership_Structure: column.text(),
    Ultimate_Beneficial_Owner: column.text(),
    Competence_of_Regulator: column.text(),
    Jurisdiction_of_SR: column.text(),
    Self_Regulatory_Mechanism: column.text(),
    Self_Regulatory_Body: column.text(),
    Authorization_Number: column.text(),
    Name_of_Program_Service: column.text(),
    Digital_Reception_Standard: column.text(),
    Method_of_Public_Transmission: column.text(),
    Is_Local_Broadcasting: column.boolean(),
    Is_Community_Broadcasting: column.boolean(),
    Is_a_Monotype_Program_Service: column.boolean(),
    Is_Broadcast_via_the_Internet: column.boolean(),
    Broadcast_Language: column.text(),
    Time_Range: column.text(),
    Clause: column.text(),
    Allocated_Frequencies: column.text(),
    Technical_Parameters_Frequency_List_Number: column.text(),
    Time_for_Which_the_License_Is_Granted: column.text(),
    Use_of_the_Supplementary_Broadcasting_Service: column.text(),
    License_Number: column.number(),
  }
});

const TelevisionBroadcaster = defineTable({
  columns: {
    Broadcaster: column.text(),
    Name: column.text(),
    Trade_Name: column.text(),
    First_Name: column.text(),
    Last_Name: column.text(),
    Address_of_Registered_Office: column.text(),
    Place_of_Business: column.text(),
    Residence: column.text(),
    Telephone_Number: column.number(),
    Email: column.text(),
    Website: column.text(),
    Ownership_Structure: column.text(),
    Ultimate_Beneficial_Owner: column.text(),
    Competence_of_Regulator: column.text(),
    Jurisdiction_of_SR: column.text(),
    Self_Regulatory_Mechanism: column.text(),
    Self_Regulatory_Body: column.text(),
    Authorization_Number: column.number(),
    Name_of_Program_Service: column.text(),
    Digital_Reception_Standard: column.text(),
    Basic_Method_of_Public_Transmission: column.text(),
    Is_Local_Broadcasting: column.boolean(),
    Community_Broadcasting: column.boolean(),
    Is_a_Monotype_Program_Service: column.boolean(),
    Is_Broadcast_via_the_Internet: column.boolean(),
    Broadcast_Language: column.text(),
    Time_Range: column.text(),
    Preliminary_Public_Access_to_Major_Events: column.text(),
    Requirements_of_the_Relevant_Decision_on_the_Clause: column.text(),
  }
});

const Churches = defineTable({
  columns: {
    ICO: column.text(),
    Date_of_Establishment: column.text(), // You might want to consider using a date type if you need date validation
    Date_of_Termination: column.text({optional: true}),
    Form: column.text(),
    SKNACE: column.text(),
    Name: column.text(),
    Address: column.text(),
    Address_House_Number: column.number(),
    Address_Postal_Code: column.number(),
    Address_Municipality: column.text(),
    Address_Zip_Code: column.number(),
    Address_Post_Office: column.text(),
    Church_Founder: column.text(),
    Registration_Number: column.number(),
    Registration_Date: column.text(),
    Statutory_Body: column.text(),
    Statutory_Body_Name: column.text(),
    Statutory_Body_Surname: column.text(),
    Statutory_Body_Date_of_Birth: column.text(), // Consider using a date type
    Statutory_Body_Effective_From: column.text(), // Consider using a date type
  }
});

const Museums = defineTable({
  columns: {
    Reg_No: column.number(),
    Museum_Name: column.text(),
    City: column.text(),
    Street_Number: column.number(), // Separate "Street" and "Number" into two columns
    Postal_Code: column.number(),
    Phone: column.number(),
    Fax: column.number(),
    Email: column.text(),
    Website: column.text(),
    Business_ID_ICO: column.number(),
    Founder_Established_by: column.text(),
    Legal_Entity_Name: column.text(),
    Date_of_Registration: column.text(), // You might want to consider using a date type if you need date validation
    Type: column.text(),
  }
});

export default defineDb({
  tables: {User, Session, Comment, PlatformProvider, Rebroadcaster, AVMS, Broadcaster, TelevisionBroadcaster, Churches, Museums }, 
});
