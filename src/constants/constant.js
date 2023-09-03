export const userRoles = {
  SUPPER_ADMIN: "SUPPER_ADMIN",
  ADMIN: "ADMIN",
};

export const routes = {
  home: "/home",
  login: "/login",
  blogMgt: "/blog-mgt",
  userMgt: "/user-mgt",
};

export const sessionFields = {
  user: "user",
  permissons: "permissions",
};

export const URL_STUDENT_SERVER = process.env.REACT_APP_API_STUDENT_URL;

export const moduleNames = {
  USER_MANAGEMENT: "Users Management",
  ROOM_MANAGEMENT: "Rooms Management",
  FACULTIES_MANAGEMENT: "Faculties Management",
  PERMISSION_MANAGEMENT: "Permission Management",
  SETTINGS: "Settings",
  AWARDS_MANAGEMENT: "Awards Management",
  BRANCH_MANAGEMENT: "Branch Management",
};

export const listModuleName = [
  {
    value: "Users Management",
    label: "Users Management"
  },
  {
    value: "Rooms Management",
    label: "Rooms Management"
  },
  {
    value: "Faculties Management",
    label: "Faculties Management"
  },
  {
    value: "Permission Management",
    label: "Permission Management",
  },
  {
    value: "Settings",
    label: "Settings",
  },
  {
    value: "Awards Management",
    label: "Awards Management",
  },
  {
    value: "Branch Management",
    label: "Branch Management"
  }
]
