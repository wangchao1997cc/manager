import service from './request'

export const userLogin = data => {
  return service({
    url: '/api/background/login/login',
    method: 'post',
    data
  })
};

export const userListInfo = data => {
  return service({
    url: '/api/background/client/clientInfo',
    method: 'post',
    data
  })
};

export const prohibitUserApi = data => {
  return service({
    url: '/api/background/client/setClientStatus',
    method: 'post',
    data
  })
};

export const userDetailApi = data => {
  return service({
    url: '/api/background/client/getClientById',
    method: 'post',
    data
  })
};

export const feedBackData = data => {
  return service({
    url: '/api/background/feedbackProblem/page',
    method: 'post',
    data
  })
};

export const feedBackDetail = data => {
  return service({
    url: '/api/background/feedbackProblem/findById',
    method: 'post',
    data
  })
};

export const solveFeedback = data => {
  return service({
    url: '/api/background/feedbackProblem/editStatus',
    method: 'post',
    data
  })
};

export const replacePhoneApply = data => {
  return service({
    url: '/api/background/modifyPhone/applyModifyPhoneNumbersInfos',
    method: 'post',
    data
  })
};

export const phoneApplyDetail = data => {
  return service({
    url: '/api/background/modifyPhone/findApplyById',
    method: 'post',
    data
  })
};

export const editClientApply = data => {
  return service({
    url: '/api/background/modifyPhone/editClientApply',
    method: 'post',
    data
  })
};

export const setupAppVersion = data => {
  return service({
    url: '/api/background/config/setAppVersion',
    method: 'post',
    data
  })
};

//获取版本信息分页
export const appVersionsData = data => {
  return service({
    url: '/api/background/config/appVersions',
    method: 'post',
    data
  })
};

//获取七牛token
export const qiniuToken = data => {
  return service({
    url: '/api/token/qiniuToken',
    method: 'post',
    data
  })
};

//用户协议列表
export const agreementList = data => {
  return service({
    url: '/api/background/config/protocolPage',
    method: 'post',
    data
  })
};

//删除版本信息
export const deleteEdition = data => {
  return service({
    url: '/api/background/config/removeAppVersion',
    method: 'post',
    data
  })
};

//删除协议
export const deleteAgreement = data => {
  return service({
    url: '/api/background/config/deleteProtocol',
    method: 'post',
    data
  })
};

//协议详情
export const agreementDetail = data => {
  return service({
    url: '/api/background/config/getProtocolDetail',
    method: 'post',
    data
  })
};

//修改或添加协议
export const saveAgreement = data => {
  return service({
    url: '/api/background/config/saveProtocol',
    method: 'post',
    data
  })
};

//管理员信息分页
export const adminList = data => {
  return service({
    url: '/api/background/system/user/list',
    method: 'post',
    data
  })
};

//删除管理员
export const deleteAdmin = data => {
  return service({
    url: '/api/background/system/user/remove',
    method: 'post',
    data
  })
};


//权限列表
export const userRoleList = data => {
  return service({
    url: '/api/background/system/user/roleList',
    method: 'post',
    data
  })
};

//保存管理员
export const saveSystemUser = data => {
  return service({
    url: '/api/background/system/user/add',
    method: 'post',
    data
  })
};

//查询管理员详情

export const systemUserDestail = data => {
  return service({
    url: '/api/background/system/user/userDetail',
    method: 'post',
    data
  })
};


//校验用户名
export const checkLoginNameUnique = data => {
  return service({
    url: '/api/background/system/user/checkLoginNameUnique',
    method: 'post',
    data
  })
};

//修改管理员
export const updateSystemUser = data => {
  return service({
    url: '/api/background/system/user/edit',
    method: 'post',
    data
  })
};

//重置管理员密码
export const userResetPwd = data => {
  return service({
    url: '/api/background/system/user/resetPwd',
    method: 'post',
    data
  })
};
