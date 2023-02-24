import mock from '../mock'
const data = {
  accountSetting: {
    general: {
      avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
      username: 'OM',
      fullName: 'Santosh',
      email: 'Digital@gmail.com',
      company: 'Digital raiz'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: require('@src/assets/images/avatars/11-small.png').default,
          id: 'OM'
        },
        google: {
          profileImg: require('@src/assets/images/avatars/3-small.png').default,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
}

mock.onGet('/account-setting/data').reply(() => [200, data.accountSetting])
