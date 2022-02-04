import { Auth } from "aws-amplify";

export const auth = {

    namespaced: true,
    
    state: {   
        authorPersonalData: {
            title: null,
            userName: null,
            btnText: 'Edit Profile',
            img: require('@/images/thumb/avatar-9.jpg'),
            coverImg: require('@/images/thumb/bread-bg-2.jpg'),
            btnLink: 'account',
            btnTextTwo: 'Profile',
            btnLinkTwo: 'profile',
      } },

    mutations: {
        setUser(state, payload) {
            state.authorPersonalData.title = payload.title
            state.authorPersonalData.userName = payload.userName
            state.authorPersonalData.img = payload.img
        }
    },

    actions: {
        async logout({ commit }) {
            commit("setUser", null);
            return await Auth.signOut();
        },
        async login({ commit }, { username, password }) {
            try {
                await Auth.signIn({
                    username,
                    password
                });

                const userInfo = await Auth.currentUserInfo();
                
                commit("setUser", { title: userInfo.username, userName: userInfo.attributes.email})
                return Promise.resolve("Success");

            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        async loginWithFb({commit}) {
            try {
                console.log("starting loging with FB")
                await Auth.federatedSignIn( {provider: "Facebook"} )

                const userInfo = await Auth.currentUserInfo();
                commit("setUser", userInfo);
                console.log("completed loging with FB")
                return Promise.resolve("Success");

            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        async confirmSignUp(_, { username, code }) {
            try {
                await Auth.confirmSignUp(username, code);
                return Promise.resolve();

            } catch (error) {
                console.log(error);
                return Promise.reject(error);

            }
        },
        async signUp(_, { username, password, email }) {
            try {
                await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email
                    }
                })
                return Promise.resolve();

            } catch (error) {
                console.log(error);
                return Promise.reject();

            }
        },
        async authAction({ commit }) {
            const userInfo = await Auth.currentUserInfo();
            console.log(userInfo)
            var pictureString = String(userInfo.attributes.picture)
            pictureString = pictureString.replace("\\", "")
            var pictureObj = JSON.parse(pictureString)
            console.log(pictureObj)
            commit("setUser", { title: userInfo.username, userName: userInfo.attributes.email, img: pictureObj.data.url })

        }
    },

    getters: {
        getUser: (state) => state.authorPersonalData
    }
}