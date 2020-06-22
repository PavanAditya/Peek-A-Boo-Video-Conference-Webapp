export const messages = {
  login:
    "Login as any user on this computer and another user on another computer.",
  create_session: "Creating a session...",
  connect: "Connecting...",
  connect_error:
    "Something went wrong with the connection. Check internet connection or user info and try again.",
  login_as: "Logged in as ",
  title_login: "Choose a user to login with:",
  title_callee: "Choose users to call:",
  calling: "Calling...",
  webrtc_not_avaible: "WebRTC is not available in your browser",
  no_internet: "Please check your Internet connection and try again",
  select_more_users: "Select at less one user to start Videocall",
  share_call_link: "Share the above url with the users you want to have a call with",
  prompt_user_name: "Input user name",
  confirm_cancel: "Do you sure to leave the call ?"
};

// export const credentials = {
//   appId: 385,
//   authKey: "DFBMs5-dKBBCXcd",
//   authSecret: "SkCW-ThdnmRg9Za"
// };

// ? Video Chat Api key details

export const credentials = {
  appId: 2710,
  authKey: "ZjuY6Pb9MUhzdkK",
  authSecret: "rXp-kU87nUddy6g"
};

// ? Video Chat Api key details

export const appConfig = {
  debug: { mode: 1 },
  conference: { server: 'wss://janus.connectycube.com:8989' }
};

export const users = [
  {
    id: 1561741,
    name: "Kick Buttowski",
    login: "videouser1@user.com",
    password: "videouser1",
    color: "#005252"
  },
  {
    id: 1561751,
    name: "Ben Tennyson",
    login: "videouser2@user.com",
    password: "videouser2",
    color: "#65007e"
  },
  {
    id: 1561752,
    name: "Blossom",
    login: "videouser3@user.com",
    password: "videouser3",
    color: "#86085a"
  },
  {
    id: 1561753,
    name: "Buttercup",
    login: "videouser4@user.com",
    password: "videouser4",
    color: "#7e5100"
  }
];

const isCordovaEnv = !!window.cordova;

export const GUEST_ROOM_ONLY_MODE = false
export const CALLING_ONLY_MODE = isCordovaEnv;

export const NO_ASNWER_TIMER = 30000 // 30 sec

export const defaultAvatarlist =
  [
    'animals_1.jpg',
    'animals_2.jpg',
    'animals_3.jpg',
    'animals_4.jpg',
    'animals_5.jpg',
    'animals_6.jpg',
    'animals_7.jpg',
    'animals_8.jpg',
    'animals_9.jpg',
    'animals_10.jpg',
  ]