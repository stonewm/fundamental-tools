//
// BAPI_EQUI_CHANGE 0.2
//

BAPI_EQUI_CHANGE = {

  // INPUT PARAMETERS

  DATA_FLEET: {},                          // BAPI_FLEET : Vehicle-Specific Data
  DATA_FLEETX: {},                         // BAPI_FLEETX : Flag Structure Belonging to BAPI_FLEET (for Change BAPIs)
  DATA_GENERAL: {},                        // BAPI_ITOB : General Data for Technical Objects
  DATA_GENERALX: {},                       // BAPI_ITOBX : Flag Structure for BAPI_ITOB for Fields to be Copied
  DATA_SPECIFIC: {},                       // BAPI_ITOB_EQ_ONLY : Equipment-Specific data
  DATA_SPECIFICX: {},                      // BAPI_ITOB_EQ_ONLYX : Flag Structure for BAPI_ITOB_EQ_ONLY for Fields to be Copied
  EQUIPMENT: '',                           // CHAR(18)   BAPI_ITOB_PARMS EQUIPMENT      Number of Equipment to be Changed
  VALID_DATE: '',                          // DATS(8)    BAPI_ITOB_PARMS INST_DATE      Date for Validity of an Equipment Usage Period Relevant Change
  VALID_TIME: '',                          // TIMS(6)    BAPI_ITOB_PARMS INST_TIME      Time for Validity of a Equipment Usage Period Relevant Change

  // OUTPUT PARAMETERS

  DATA_FLEET_EXP: {},                      // BAPI_FLEET : Vehicle-Specific Data
  DATA_GENERAL_EXP: {},                    // BAPI_ITOB : General Data for Technical Objects
  DATA_SPECIFIC_EXP: {},                   // BAPI_ITOB_EQ_ONLY : Equipment-Specific data
  RETURN: {},                              // BAPIRET2 : Return Parameter

  // TABLE PARAMETERS

  EXTENSIONIN: [],                         // BAPIPAREX : Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
  EXTENSIONOUT: []                         // BAPIPAREX : Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
};

//
// INPUT PARAMETERS
//

// DATA_FLEET BAPI_FLEET Vehicle-Specific Data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_FLEET = {
  CARD_NUM                      : '',  // Fuel card number
  CHASSIS_NUM                   : '',  // Chassis number
  CONSUMP_MOVE                  : '',  // Indicator Consumption Recording: Material Movement
  CONSUMP_TOL                   : '',  // Indicator Consumption Recording: Permitted Tolerances
  DIM_UNIT                      : '',  // Unit of length
  DIM_UNIT_ISO                  : '',  // ISO code for unit of measurement
  ENGINE_CAP                    : 0,  // Engine capacity
  ENGINE_CYL                    : '',  // Number of cylinders
  ENGINE_POWER                  : 0,  // Power at specific number of revolutions per minute
  ENGINE_SNR                    : '',  // Engine serial number of manufacturer
  ENGINE_TYPE                   : '',  // Engine type
  EXPIRY_DATE                   : '',  // Validity end date
  FLEET_HGT                     : 0,  // Maximum fleet object height
  FLEET_LEN                     : 0,  // Maximum fleet object length
  FLEET_NUM                     : '',  // Identification number for fleet object
  FLEET_USE                     : '',  // Usage indicator
  FLEET_VIN                     : '',  // Manufacturer Vehicle Identification Number for Fleet Object
  FLEET_WID                     : 0,  // Width of fleet object
  FUEL_PRI                      : '',  // Consumable Type of Primary Fuel
  FUEL_SEC                      : '',  // Consumable type of secondary fuel
  GROSS_WGT                     : 0,  // Total Weight Allowed
  KEY_NUM                       : '',  // Key number of vehicle
  LICENSE_NUM                   : '',  // License plate number
  LOAD_DIM_UNIT                 : '',  // Unit for freight dimensions
  LOAD_DIM_UNIT_ISO             : '',  // ISO code for unit of measurement
  LOAD_HGT                      : 0,  // Load height
  LOAD_LEN                      : 0,  // Load length
  LOAD_VOL                      : 0,  // Load volume
  LOAD_WGT                      : 0,  // Maximum load weight
  LOAD_WID                      : 0,  // Load width
  MAX_OCCUPANTS                 : '',  // Maximum number of occupants
  NO_COMPART                    : '',  // NUmber of compartments
  NUM_AXLE                      : '',  // Number of Axles in Fleet Object
  OIL_TYPE                      : '',  // Consumable type of oil
  PRI_CALC                      : '',  // Indicator to determine the calculation method f. consumption
  REPLA_DATE                    : '',  // Date on which the object should be replaced
  REPLA_ODOM                    : '',  // Odometer reading at replacement
  REPLA_OPH                     : '',  // Hour meter reading at replacement
  REVOLUTIONS                   : '',  // Revolutions per minute
  SPEED_MAX                     : 0,  // Maximum Fleet Object Speed
  SPEED_UNIT                    : '',  // Speed Unit
  SPEED_UNIT_ISO                : '',  // ISO code for unit of measurement
  UNIT_CAP                      : '',  // Unit for engine capacity measurement
  UNIT_CAP_ISO                  : '',  // ISO code for unit of measurement
  UNIT_POWER                    : '',  // Power unit
  UNIT_POWER_ISO                : '',  // ISO code for unit of measurement
  VOL_UNIT                      : '',  // Volume unit
  VOL_UNIT_ISO                  : '',  // ISO code for unit of measurement
  WGT_UNIT                      : '',  // Unit of weight
  WGT_UNIT_ISO                  : ''   // ISO code for unit of measurement
};
/* eslint-enable key-spacing */

// DATA_FLEETX BAPI_FLEETX Flag Structure Belonging to BAPI_FLEET (for Change BAPIs)

/* eslint-disable key-spacing */
// prettier-ignore
DATA_FLEETX = {
  CARD_NUM                      : '',  // Updated information in related user data field
  CHASSIS_NUM                   : '',  // Updated information in related user data field
  CONSUMP_MOVE                  : '',  // Updated information in related user data field
  CONSUMP_TOL                   : '',  // Updated information in related user data field
  DIM_UNIT                      : '',  // Updated information in related user data field
  DIM_UNIT_ISO                  : '',  // Updated information in related user data field
  ENGINE_CAP                    : '',  // Updated information in related user data field
  ENGINE_CYL                    : '',  // Updated information in related user data field
  ENGINE_POWER                  : '',  // Updated information in related user data field
  ENGINE_SNR                    : '',  // Updated information in related user data field
  ENGINE_TYPE                   : '',  // Updated information in related user data field
  EXPIRY_DATE                   : '',  // Updated information in related user data field
  FLEET_HGT                     : '',  // Updated information in related user data field
  FLEET_LEN                     : '',  // Updated information in related user data field
  FLEET_NUM                     : '',  // Updated information in related user data field
  FLEET_USE                     : '',  // Updated information in related user data field
  FLEET_VIN                     : '',  // Updated information in related user data field
  FLEET_WID                     : '',  // Updated information in related user data field
  FUEL_PRI                      : '',  // Updated information in related user data field
  FUEL_SEC                      : '',  // Updated information in related user data field
  GROSS_WGT                     : '',  // Updated information in related user data field
  KEY_NUM                       : '',  // Updated information in related user data field
  LICENSE_NUM                   : '',  // Updated information in related user data field
  LOAD_DIM_UNIT                 : '',  // Updated information in related user data field
  LOAD_DIM_UNIT_ISO             : '',  // Updated information in related user data field
  LOAD_HGT                      : '',  // Updated information in related user data field
  LOAD_LEN                      : '',  // Updated information in related user data field
  LOAD_VOL                      : '',  // Updated information in related user data field
  LOAD_WGT                      : '',  // Updated information in related user data field
  LOAD_WID                      : '',  // Updated information in related user data field
  MAX_OCCUPANTS                 : '',  // Updated information in related user data field
  NO_COMPART                    : '',  // Updated information in related user data field
  NUM_AXLE                      : '',  // Updated information in related user data field
  OIL_TYPE                      : '',  // Updated information in related user data field
  PRI_CALC                      : '',  // Updated information in related user data field
  REPLA_DATE                    : '',  // Updated information in related user data field
  REPLA_ODOM                    : '',  // Updated information in related user data field
  REPLA_OPH                     : '',  // Updated information in related user data field
  REVOLUTIONS                   : '',  // Updated information in related user data field
  SPEED_MAX                     : '',  // Updated information in related user data field
  SPEED_UNIT                    : '',  // Updated information in related user data field
  SPEED_UNIT_ISO                : '',  // Updated information in related user data field
  UNIT_CAP                      : '',  // Updated information in related user data field
  UNIT_CAP_ISO                  : '',  // Updated information in related user data field
  UNIT_POWER                    : '',  // Updated information in related user data field
  UNIT_POWER_ISO                : '',  // Updated information in related user data field
  VOL_UNIT                      : '',  // Updated information in related user data field
  VOL_UNIT_ISO                  : '',  // Updated information in related user data field
  WGT_UNIT                      : '',  // Updated information in related user data field
  WGT_UNIT_ISO                  : ''   // Updated information in related user data field
};
/* eslint-enable key-spacing */

// DATA_GENERAL BAPI_ITOB General Data for Technical Objects

/* eslint-disable key-spacing */
// prettier-ignore
DATA_GENERAL = {
  ABCINDIC                      : '',  // ABC indicator for technical object
  ACQDATE                       : '',  // Acquisition date
  ACQUISVAL                     : 0,  // Acquisition Value
  ASSET_NO                      : '',  // Main Asset Number
  AUTHGRP                       : '',  // Technical object authorization group
  BUS_AREA                      : '',  // Business Area
  CATPROFILE                    : '',  // Catalog Profile
  COMP_CODE                     : '',  // Company Code
  CONSTMONTH                    : '',  // Month of construction
  CONSTTYPE                     : '',  // Construction type material of the object
  CONSTTYPE_EXTERNAL            : '',  // Long Material Number for CONSTTYPE Field
  CONSTTYPE_GUID                : '',  // External GUID for CONSTTYPE Field
  CONSTTYPE_LONG                : '',  // Construction type material of the object
  CONSTTYPE_VERSION             : '',  // Version Number for CONSTTYPE Field
  CONSTYEAR                     : '',  // Year of construction
  COSTCENTER                    : '',  // Cost Center
  COUNTR_ISO                    : '',  // Country ISO code
  CURRENCY                      : '',  // Currency Key
  CURR_ISO                      : '',  // ISO currency code
  DESCRIPT                      : '',  // Description of Technical Object
  DISTR_CHAN                    : '',  // Distribution Channel
  DIVISION                      : '',  // Division
  END_POINT                     : '',  // End Point
  FIRST_OFFSET_TYPE_CODE        : '',  // Type of First Offset
  FIRST_OFFSET_UNIT             : '',  // Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO         : '',  // Unit of Measurement for Offset 1 in ISO Code
  FIRST_OFFSET_VALUE            : '',  // Value of Offset 1
  INVENTORY                     : '',  // Inventory number
  LINEAR_LENGTH                 : '',  // Length
  LINEAR_REFERENCE_PATTERN      : '',  // Linear Reference Pattern
  LINEAR_UNIT                   : '',  // Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO               : '',  // Unit of Measurement for Linear Data in ISO Code
  MAINTLOC                      : '',  // Asset location
  MAINTPLANT                    : '',  // Maintenance plant
  MAINTROOM                     : '',  // Room
  MANCOUNTRY                    : '',  // Country of manufacture
  MANFACTURE                    : '',  // Manufacturer of asset
  MANMODEL                      : '',  // Manufacturer model number
  MANPARNO                      : '',  // Manufacturer part number
  MANSERNO                      : '',  // Manufacturer serial number
  MARKER_DISTANCE_END_POINT     : '',  // Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_START_POINT   : '',  // Distance between Marker and Start Point
  MARKER_DISTANCE_UNIT          : '',  // Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO      : '',  // Unit for the Distance from Marker in ISO Code
  MARKER_END_POINT              : '',  // Marker for End Point
  MARKER_START_POINT            : '',  // Marker for Start Point
  OBJECTTYPE                    : '',  // Type of Technical Object
  OBJ_SIZE                      : '',  // Size/dimension
  OBJ_WEIGHT                    : 0,  // Weight of object
  PLANGROUP                     : '',  // Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                     : '',  // Maintenance Planning Plant
  PLSECTN                       : '',  // Plant section
  PP_WKCTR                      : '',  // Object ID of PP work center
  READ_ADRNR                    : '',  // Address number
  READ_CHDAT                    : '',  // Date of Last Change
  READ_CHNAM                    : '',  // Name of person who changed object
  READ_CRDAT                    : '',  // Date on Which Record Was Created
  READ_CRNAM                    : '',  // Name of Person who Created the Object
  READ_OBJNR                    : '',  // Object number
  SALES_GRP                     : '',  // Sales group
  SALES_OFF                     : '',  // Sales office
  SALES_ORG                     : '',  // Sales Organization
  SECOND_OFFSET_TYPE_CODE       : '',  // Type of Second Offset
  SECOND_OFFSET_UNIT            : '',  // Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO        : '',  // Unit of Measurement for Offset 2 in ISO Code
  SECOND_OFFSET_VALUE           : '',  // Value of Offset 2
  SETTLORDER                    : '',  // Settlement order
  SHIFT_NOTE_NOTIFICATION_TYPE  : '',  // Notification Type for Shift Note for Object
  SHIFT_REPORT_TYPE             : '',  // Shift Report Type for Object
  SORTFIELD                     : '',  // Sort field
  STANDORDER                    : '',  // Standing order number
  START_FROM                    : '',  // Start-up Date of the Technical Object
  START_POINT                   : '',  // Start Point
  SUB_NUMBER                    : '',  // Asset Subnumber
  UNIT_ISO                      : '',  // ISO code for unit of measurement
  UNIT_OF_WT                    : '',  // Unit of weight
  WBS_ELEM                      : '',  // Work Breakdown Structure Element (WBS Element)
  WORK_CTR                      : ''   // Object ID of the Work Center
};
/* eslint-enable key-spacing */

// DATA_GENERALX BAPI_ITOBX Flag Structure for BAPI_ITOB for Fields to be Copied

/* eslint-disable key-spacing */
// prettier-ignore
DATA_GENERALX = {
  ABCINDIC                      : '',  // Updated information in related user data field
  ACQDATE                       : '',  // Updated information in related user data field
  ACQUISVAL                     : '',  // Updated information in related user data field
  ASSET_NO                      : '',  // Updated information in related user data field
  AUTHGRP                       : '',  // Updated information in related user data field
  BUS_AREA                      : '',  // Updated information in related user data field
  CATPROFILE                    : '',  // Updated information in related user data field
  COMP_CODE                     : '',  // Updated information in related user data field
  CONSTMONTH                    : '',  // Updated information in related user data field
  CONSTTYPE                     : '',  // Updated information in related user data field
  CONSTTYPE_EXTERNAL            : '',  // Updated information in related user data field
  CONSTTYPE_GUID                : '',  // Updated information in related user data field
  CONSTTYPE_LONG                : '',  // Updated information in related user data field
  CONSTTYPE_VERSION             : '',  // Updated information in related user data field
  CONSTYEAR                     : '',  // Updated information in related user data field
  COSTCENTER                    : '',  // Updated information in related user data field
  COUNTR_ISO                    : '',  // Updated information in related user data field
  CURRENCY                      : '',  // Updated information in related user data field
  CURR_ISO                      : '',  // Updated information in related user data field
  DESCRIPT                      : '',  // Updated information in related user data field
  DISTR_CHAN                    : '',  // Updated information in related user data field
  DIVISION                      : '',  // Updated information in related user data field
  END_POINT                     : '',  // Updated information in related user data field
  FIRST_OFFSET_TYPE_CODE        : '',  // Updated information in related user data field
  FIRST_OFFSET_UNIT             : '',  // Updated information in related user data field
  FIRST_OFFSET_UNIT_ISO         : '',  // Updated information in related user data field
  FIRST_OFFSET_VALUE            : '',  // Updated information in related user data field
  INVENTORY                     : '',  // Updated information in related user data field
  LINEAR_LENGTH                 : '',  // Updated information in related user data field
  LINEAR_REFERENCE_PATTERN      : '',  // Updated information in related user data field
  LINEAR_UNIT                   : '',  // Updated information in related user data field
  LINEAR_UNIT_ISO               : '',  // Updated information in related user data field
  MAINTLOC                      : '',  // Updated information in related user data field
  MAINTPLANT                    : '',  // Updated information in related user data field
  MAINTROOM                     : '',  // Updated information in related user data field
  MANCOUNTRY                    : '',  // Updated information in related user data field
  MANFACTURE                    : '',  // Updated information in related user data field
  MANMODEL                      : '',  // Updated information in related user data field
  MANPARNO                      : '',  // Updated information in related user data field
  MANSERNO                      : '',  // Updated information in related user data field
  MARKER_DISTANCE_END_POINT     : '',  // Updated information in related user data field
  MARKER_DISTANCE_START_POINT   : '',  // Updated information in related user data field
  MARKER_DISTANCE_UNIT          : '',  // Updated information in related user data field
  MARKER_DISTANCE_UNIT_ISO      : '',  // Updated information in related user data field
  MARKER_END_POINT              : '',  // Updated information in related user data field
  MARKER_START_POINT            : '',  // Updated information in related user data field
  OBJECTTYPE                    : '',  // Updated information in related user data field
  OBJ_SIZE                      : '',  // Updated information in related user data field
  OBJ_WEIGHT                    : '',  // Updated information in related user data field
  PLANGROUP                     : '',  // Updated information in related user data field
  PLANPLANT                     : '',  // Updated information in related user data field
  PLSECTN                       : '',  // Updated information in related user data field
  PP_WKCTR                      : '',  // Updated information in related user data field
  READ_ADRNR                    : '',  // Updated information in related user data field
  READ_CHDAT                    : '',  // Updated information in related user data field
  READ_CHNAM                    : '',  // Updated information in related user data field
  READ_CRDAT                    : '',  // Updated information in related user data field
  READ_CRNAM                    : '',  // Updated information in related user data field
  READ_OBJNR                    : '',  // Updated information in related user data field
  SALES_GRP                     : '',  // Updated information in related user data field
  SALES_OFF                     : '',  // Updated information in related user data field
  SALES_ORG                     : '',  // Updated information in related user data field
  SECOND_OFFSET_TYPE_CODE       : '',  // Updated information in related user data field
  SECOND_OFFSET_UNIT            : '',  // Updated information in related user data field
  SECOND_OFFSET_UNIT_ISO        : '',  // Updated information in related user data field
  SECOND_OFFSET_VALUE           : '',  // Updated information in related user data field
  SETTLORDER                    : '',  // Updated information in related user data field
  SHIFT_NOTE_NOTIFICATION_TYPE  : '',  // Updated information in related user data field
  SHIFT_REPORT_TYPE             : '',  // Updated information in related user data field
  SORTFIELD                     : '',  // Updated information in related user data field
  STANDORDER                    : '',  // Updated information in related user data field
  START_FROM                    : '',  // Updated information in related user data field
  START_POINT                   : '',  // Updated information in related user data field
  SUB_NUMBER                    : '',  // Updated information in related user data field
  UNIT_ISO                      : '',  // Updated information in related user data field
  UNIT_OF_WT                    : '',  // Updated information in related user data field
  WBS_ELEM                      : '',  // Updated information in related user data field
  WORK_CTR                      : ''   // Updated information in related user data field
};
/* eslint-enable key-spacing */

// DATA_SPECIFIC BAPI_ITOB_EQ_ONLY Equipment-Specific data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_SPECIFIC = {
  BATCH                         : '',  // Batch Number
  CONFIGMAT                     : '',  // Configurable Material
  CONFIGMAT_EXTERNAL            : '',  // Long Material Number for CONFIGMAT Field
  CONFIGMAT_GUID                : '',  // External GUID for CONFIGMAT Field
  CONFIGMAT_LONG                : '',  // Configurable Material
  CONFIGMAT_VERSION             : '',  // Version Number for CONFIGMAT Field
  CONFIG_CONTROL_IND            : '',  // General Indicator (Single Character)
  DELIVDATE                     : '',  // First delivery date of the equipment
  EQUICATGRY                    : '',  // Equipment category
  FREE_DATE1                    : '',  // Date, intended for SAP internal use
  FREE_DATE2                    : '',  // Date, intended for SAP internal use
  FREE_NOTE1                    : '',  // Technical information, intended for SAP internal use
  FREE_NOTE2                    : '',  // Technical information, intended for SAP internal use
  FREE_NUM1                     : '',  // Numerical field, intended for SAP internal use
  FREE_NUM2                     : '',  // Numerical field, intended for SAP internal use
  FUNC_ID                       : '',  // Function Identifier
  INST_POS                      : '',  // Equipment position at InstallLoc (Superior Equip./FunctLoc)
  IPPE_GUID                     : '',  // Internal Identification for PVS Objects
  IUID_TYPE                     : '',  // Structure Type of UII
  LICENSE                       : '',  // Equipment license number
  MANDRAWNO                     : '',  // Manufacturer drawing number
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  READ_CUOBJ                    : '',  // Configuration (internal object number)
  READ_CUREF                    : '',  // Referenced Configuration
  READ_FLOC                     : '',  // Functional Location Label
  READ_MAINTENANCE_PLAN         : '',  // Maintenance Plan
  READ_MEASURING_POINT          : '',  // Measuring Point
  READ_SUPEQ                    : '',  // Superordinate Equipment
  READ_VALID_FROM               : '',  // Valid-From Date
  SERIALNO                      : '',  // Serial Number
  TECHID                        : '',  // Technical identification number
  TECHS                         : '',  // Parameter Variant/Standard Variant
  UII                           : '',  // Unique Item Identifier
  UII_PLANT                     : ''   // Plant Responsible for UII
};
/* eslint-enable key-spacing */

// DATA_SPECIFICX BAPI_ITOB_EQ_ONLYX Flag Structure for BAPI_ITOB_EQ_ONLY for Fields to be Copied

/* eslint-disable key-spacing */
// prettier-ignore
DATA_SPECIFICX = {
  BATCH                         : '',  // Updated information in related user data field
  CONFIGMAT                     : '',  // Updated information in related user data field
  CONFIGMAT_EXTERNAL            : '',  // Updated information in related user data field
  CONFIGMAT_GUID                : '',  // Updated information in related user data field
  CONFIGMAT_LONG                : '',  // Updated information in related user data field
  CONFIGMAT_VERSION             : '',  // Updated information in related user data field
  DELIVDATE                     : '',  // Updated information in related user data field
  EQUICATGRY                    : '',  // Updated information in related user data field
  EQUIPMENT                     : '',  // Updated information in related user data field
  FREE_DATE1                    : '',  // Updated information in related user data field
  FREE_DATE2                    : '',  // Updated information in related user data field
  FREE_NOTE1                    : '',  // Updated information in related user data field
  FREE_NOTE2                    : '',  // Updated information in related user data field
  FREE_NUM1                     : '',  // Updated information in related user data field
  FREE_NUM2                     : '',  // Updated information in related user data field
  FUNC_ID                       : '',  // Updated information in related user data field
  INST_POS                      : '',  // Updated information in related user data field
  IPPE_GUID                     : '',  // Updated information in related user data field
  IUID_TYPE                     : '',  // Updated information in related user data field
  LICENSE                       : '',  // Updated information in related user data field
  MANDRAWNO                     : '',  // Updated information in related user data field
  MATERIAL                      : '',  // Updated information in related user data field
  MATERIAL_EXTERNAL             : '',  // Updated information in related user data field
  MATERIAL_GUID                 : '',  // Updated information in related user data field
  MATERIAL_LONG                 : '',  // Updated information in related user data field
  MATERIAL_VERSION              : '',  // Updated information in related user data field
  READ_CUOBJ                    : '',  // Updated information in related user data field
  READ_CUREF                    : '',  // Updated information in related user data field
  READ_FLOC                     : '',  // Updated information in related user data field
  READ_MAINTENANCE_PLAN         : '',  // Updated information in related user data field
  READ_MEASURING_POINT          : '',  // Updated information in related user data field
  READ_SUPEQ                    : '',  // Updated information in related user data field
  READ_VALID_FROM               : '',  // Updated information in related user data field
  SERIALNO                      : '',  // Updated information in related user data field
  TECHID                        : '',  // Updated information in related user data field
  TECHS                         : '',  // Updated information in related user data field
  UII                           : '',  // Updated information in related user data field
  UII_PLANT                     : ''   // Updated information in related user data field
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// DATA_FLEET_EXP BAPI_FLEET Vehicle-Specific Data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_FLEET_EXP = {
  CARD_NUM                      : '',  // Fuel card number
  CHASSIS_NUM                   : '',  // Chassis number
  CONSUMP_MOVE                  : '',  // Indicator Consumption Recording: Material Movement
  CONSUMP_TOL                   : '',  // Indicator Consumption Recording: Permitted Tolerances
  DIM_UNIT                      : '',  // Unit of length
  DIM_UNIT_ISO                  : '',  // ISO code for unit of measurement
  ENGINE_CAP                    : 0,  // Engine capacity
  ENGINE_CYL                    : '',  // Number of cylinders
  ENGINE_POWER                  : 0,  // Power at specific number of revolutions per minute
  ENGINE_SNR                    : '',  // Engine serial number of manufacturer
  ENGINE_TYPE                   : '',  // Engine type
  EXPIRY_DATE                   : '',  // Validity end date
  FLEET_HGT                     : 0,  // Maximum fleet object height
  FLEET_LEN                     : 0,  // Maximum fleet object length
  FLEET_NUM                     : '',  // Identification number for fleet object
  FLEET_USE                     : '',  // Usage indicator
  FLEET_VIN                     : '',  // Manufacturer Vehicle Identification Number for Fleet Object
  FLEET_WID                     : 0,  // Width of fleet object
  FUEL_PRI                      : '',  // Consumable Type of Primary Fuel
  FUEL_SEC                      : '',  // Consumable type of secondary fuel
  GROSS_WGT                     : 0,  // Total Weight Allowed
  KEY_NUM                       : '',  // Key number of vehicle
  LICENSE_NUM                   : '',  // License plate number
  LOAD_DIM_UNIT                 : '',  // Unit for freight dimensions
  LOAD_DIM_UNIT_ISO             : '',  // ISO code for unit of measurement
  LOAD_HGT                      : 0,  // Load height
  LOAD_LEN                      : 0,  // Load length
  LOAD_VOL                      : 0,  // Load volume
  LOAD_WGT                      : 0,  // Maximum load weight
  LOAD_WID                      : 0,  // Load width
  MAX_OCCUPANTS                 : '',  // Maximum number of occupants
  NO_COMPART                    : '',  // NUmber of compartments
  NUM_AXLE                      : '',  // Number of Axles in Fleet Object
  OIL_TYPE                      : '',  // Consumable type of oil
  PRI_CALC                      : '',  // Indicator to determine the calculation method f. consumption
  REPLA_DATE                    : '',  // Date on which the object should be replaced
  REPLA_ODOM                    : '',  // Odometer reading at replacement
  REPLA_OPH                     : '',  // Hour meter reading at replacement
  REVOLUTIONS                   : '',  // Revolutions per minute
  SPEED_MAX                     : 0,  // Maximum Fleet Object Speed
  SPEED_UNIT                    : '',  // Speed Unit
  SPEED_UNIT_ISO                : '',  // ISO code for unit of measurement
  UNIT_CAP                      : '',  // Unit for engine capacity measurement
  UNIT_CAP_ISO                  : '',  // ISO code for unit of measurement
  UNIT_POWER                    : '',  // Power unit
  UNIT_POWER_ISO                : '',  // ISO code for unit of measurement
  VOL_UNIT                      : '',  // Volume unit
  VOL_UNIT_ISO                  : '',  // ISO code for unit of measurement
  WGT_UNIT                      : '',  // Unit of weight
  WGT_UNIT_ISO                  : ''   // ISO code for unit of measurement
};
/* eslint-enable key-spacing */

// DATA_GENERAL_EXP BAPI_ITOB General Data for Technical Objects

/* eslint-disable key-spacing */
// prettier-ignore
DATA_GENERAL_EXP = {
  ABCINDIC                      : '',  // ABC indicator for technical object
  ACQDATE                       : '',  // Acquisition date
  ACQUISVAL                     : 0,  // Acquisition Value
  ASSET_NO                      : '',  // Main Asset Number
  AUTHGRP                       : '',  // Technical object authorization group
  BUS_AREA                      : '',  // Business Area
  CATPROFILE                    : '',  // Catalog Profile
  COMP_CODE                     : '',  // Company Code
  CONSTMONTH                    : '',  // Month of construction
  CONSTTYPE                     : '',  // Construction type material of the object
  CONSTTYPE_EXTERNAL            : '',  // Long Material Number for CONSTTYPE Field
  CONSTTYPE_GUID                : '',  // External GUID for CONSTTYPE Field
  CONSTTYPE_LONG                : '',  // Construction type material of the object
  CONSTTYPE_VERSION             : '',  // Version Number for CONSTTYPE Field
  CONSTYEAR                     : '',  // Year of construction
  COSTCENTER                    : '',  // Cost Center
  COUNTR_ISO                    : '',  // Country ISO code
  CURRENCY                      : '',  // Currency Key
  CURR_ISO                      : '',  // ISO currency code
  DESCRIPT                      : '',  // Description of Technical Object
  DISTR_CHAN                    : '',  // Distribution Channel
  DIVISION                      : '',  // Division
  END_POINT                     : '',  // End Point
  FIRST_OFFSET_TYPE_CODE        : '',  // Type of First Offset
  FIRST_OFFSET_UNIT             : '',  // Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO         : '',  // Unit of Measurement for Offset 1 in ISO Code
  FIRST_OFFSET_VALUE            : '',  // Value of Offset 1
  INVENTORY                     : '',  // Inventory number
  LINEAR_LENGTH                 : '',  // Length
  LINEAR_REFERENCE_PATTERN      : '',  // Linear Reference Pattern
  LINEAR_UNIT                   : '',  // Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO               : '',  // Unit of Measurement for Linear Data in ISO Code
  MAINTLOC                      : '',  // Asset location
  MAINTPLANT                    : '',  // Maintenance plant
  MAINTROOM                     : '',  // Room
  MANCOUNTRY                    : '',  // Country of manufacture
  MANFACTURE                    : '',  // Manufacturer of asset
  MANMODEL                      : '',  // Manufacturer model number
  MANPARNO                      : '',  // Manufacturer part number
  MANSERNO                      : '',  // Manufacturer serial number
  MARKER_DISTANCE_END_POINT     : '',  // Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_START_POINT   : '',  // Distance between Marker and Start Point
  MARKER_DISTANCE_UNIT          : '',  // Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO      : '',  // Unit for the Distance from Marker in ISO Code
  MARKER_END_POINT              : '',  // Marker for End Point
  MARKER_START_POINT            : '',  // Marker for Start Point
  OBJECTTYPE                    : '',  // Type of Technical Object
  OBJ_SIZE                      : '',  // Size/dimension
  OBJ_WEIGHT                    : 0,  // Weight of object
  PLANGROUP                     : '',  // Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                     : '',  // Maintenance Planning Plant
  PLSECTN                       : '',  // Plant section
  PP_WKCTR                      : '',  // Object ID of PP work center
  READ_ADRNR                    : '',  // Address number
  READ_CHDAT                    : '',  // Date of Last Change
  READ_CHNAM                    : '',  // Name of person who changed object
  READ_CRDAT                    : '',  // Date on Which Record Was Created
  READ_CRNAM                    : '',  // Name of Person who Created the Object
  READ_OBJNR                    : '',  // Object number
  SALES_GRP                     : '',  // Sales group
  SALES_OFF                     : '',  // Sales office
  SALES_ORG                     : '',  // Sales Organization
  SECOND_OFFSET_TYPE_CODE       : '',  // Type of Second Offset
  SECOND_OFFSET_UNIT            : '',  // Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO        : '',  // Unit of Measurement for Offset 2 in ISO Code
  SECOND_OFFSET_VALUE           : '',  // Value of Offset 2
  SETTLORDER                    : '',  // Settlement order
  SHIFT_NOTE_NOTIFICATION_TYPE  : '',  // Notification Type for Shift Note for Object
  SHIFT_REPORT_TYPE             : '',  // Shift Report Type for Object
  SORTFIELD                     : '',  // Sort field
  STANDORDER                    : '',  // Standing order number
  START_FROM                    : '',  // Start-up Date of the Technical Object
  START_POINT                   : '',  // Start Point
  SUB_NUMBER                    : '',  // Asset Subnumber
  UNIT_ISO                      : '',  // ISO code for unit of measurement
  UNIT_OF_WT                    : '',  // Unit of weight
  WBS_ELEM                      : '',  // Work Breakdown Structure Element (WBS Element)
  WORK_CTR                      : ''   // Object ID of the Work Center
};
/* eslint-enable key-spacing */

// DATA_SPECIFIC_EXP BAPI_ITOB_EQ_ONLY Equipment-Specific data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_SPECIFIC_EXP = {
  BATCH                         : '',  // Batch Number
  CONFIGMAT                     : '',  // Configurable Material
  CONFIGMAT_EXTERNAL            : '',  // Long Material Number for CONFIGMAT Field
  CONFIGMAT_GUID                : '',  // External GUID for CONFIGMAT Field
  CONFIGMAT_LONG                : '',  // Configurable Material
  CONFIGMAT_VERSION             : '',  // Version Number for CONFIGMAT Field
  CONFIG_CONTROL_IND            : '',  // General Indicator (Single Character)
  DELIVDATE                     : '',  // First delivery date of the equipment
  EQUICATGRY                    : '',  // Equipment category
  FREE_DATE1                    : '',  // Date, intended for SAP internal use
  FREE_DATE2                    : '',  // Date, intended for SAP internal use
  FREE_NOTE1                    : '',  // Technical information, intended for SAP internal use
  FREE_NOTE2                    : '',  // Technical information, intended for SAP internal use
  FREE_NUM1                     : '',  // Numerical field, intended for SAP internal use
  FREE_NUM2                     : '',  // Numerical field, intended for SAP internal use
  FUNC_ID                       : '',  // Function Identifier
  INST_POS                      : '',  // Equipment position at InstallLoc (Superior Equip./FunctLoc)
  IPPE_GUID                     : '',  // Internal Identification for PVS Objects
  IUID_TYPE                     : '',  // Structure Type of UII
  LICENSE                       : '',  // Equipment license number
  MANDRAWNO                     : '',  // Manufacturer drawing number
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  READ_CUOBJ                    : '',  // Configuration (internal object number)
  READ_CUREF                    : '',  // Referenced Configuration
  READ_FLOC                     : '',  // Functional Location Label
  READ_MAINTENANCE_PLAN         : '',  // Maintenance Plan
  READ_MEASURING_POINT          : '',  // Measuring Point
  READ_SUPEQ                    : '',  // Superordinate Equipment
  READ_VALID_FROM               : '',  // Valid-From Date
  SERIALNO                      : '',  // Serial Number
  TECHID                        : '',  // Technical identification number
  TECHS                         : '',  // Parameter Variant/Standard Variant
  UII                           : '',  // Unique Item Identifier
  UII_PLANT                     : ''   // Plant Responsible for UII
};
/* eslint-enable key-spacing */

// RETURN BAPIRET2 Return Parameter

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                         : '',  // Field in parameter
  ID                            : '',  // Message Class
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  NUMBER                        : '',  // Message Number
  PARAMETER                     : '',  // Parameter Name
  ROW                           : 0,  // Lines in parameter
  SYSTEM                        : '',  // Logical system from which message originates
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//
