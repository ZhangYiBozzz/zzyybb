// ctrl+Alt+V
namespace Res {
  export interface StyleKeyword {
    keyWord: string;
    descWord?: any;
  }

  export interface Data {
    showKeyword: string;
    styleKeyword: StyleKeyword;
    realkeyword: string;
    searchType: number;
    action: number;
    alg: string;
    gap: number;
    source?: any;
    bizQueryInfo: string;
    logInfo?: any;
    imageUrl?: any;
    trp_type?: any;
    trp_id?: any;
  }

  export interface RootObject {
    code: number;
    message?: any;
    data: Data;
  }
  // search
  export interface Ar {
    id: number;
    name: string;
    tns: string[];
    alias: any[];
  }

  export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
  }

  export interface H {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface M {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface Sq {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType: number;
    cannotListenReason: number;
  }

  export interface ChargeInfoList {
    rate: number;
    chargeUrl?: any;
    chargeMessage?: any;
    chargeType: number;
  }

  export interface Privilege {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl?: any;
    freeTrialPrivilege: FreeTrialPrivilege;
    rightSource: number;
    chargeInfoList: ChargeInfoList[];
  }

  export interface Song {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: M;
    l: L;
    sq: Sq;
    hr?: any;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    rtype: number;
    rurl?: any;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
    privilege: Privilege;
  }

  export interface Result {
    searchQcReminder?: any;
    songs: Song[];
    songCount: number;
  }

  export interface RootObjectSearch {
    result: Result;
    code: number;
  }
  //榜
  export interface Track {
    first: string;
    second: string;
  }

  export interface List {
    subscribers: any[];
    subscribed?: any;
    creator?: any;
    artists?: any;
    tracks: Track[];
    updateFrequency: string;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    coverText?: any;
    titleImageUrl?: any;
    coverImageUrl?: any;
    iconImageUrl?: any;
    englishTitle?: any;
    opRecommend: boolean;
    recommendInfo?: any;
    socialPlaylistCover?: any;
    tsSongCount: number;
    trackCount: number;
    totalDuration: number;
    trackNumberUpdateTime: number;
    trackUpdateTime: number;
    privacy: number;
    playCount: number;
    adType: number;
    cloudTrackCount: number;
    subscribedCount: number;
    highQuality: boolean;
    specialType: number;
    updateTime: number;
    newImported: boolean;
    coverImgId: number;
    anonimous: boolean;
    coverImgUrl: string;
    commentThreadId: string;
    createTime: number;
    ordered: boolean;
    description: string;
    status: number;
    tags: any[];
    userId: number;
    name: string;
    id: number;
    coverImgId_str: string;
    toplistType: string;
  }

  export interface Artist {
    first: string;
    second: string;
    third: number;
  }

  export interface ArtistToplist {
    coverUrl: string;
    artists: Artist[];
    name: string;
    upateFrequency: string;
    position: number;
    updateFrequency: string;
  }

  export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
  }

  export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
  }

  export interface Artist {
    name: string;
    id: number;
    picId: number;
    img1v1Id: number;
    briefDesc: string;
    picUrl: string;
    img1v1Url: string;
    albumSize: number;
    alias: any[];
    trans: string;
    musicSize: number;
    topicPerson: number;
  }

  export interface Album {
    name: string;
    id: number;
    type: string;
    size: number;
    picId: number;
    blurPicUrl: string;
    companyId: number;
    pic: number;
    picUrl: string;
    publishTime: number;
    description: string;
    tags: string;
    company: string;
    briefDesc: string;
    artist: Artist;
    songs: any[];
    alias: any[];
    status: number;
    copyrightId: number;
    commentThreadId: string;
    artists: Artist[];
    subType: string;
    transName?: any;
    onSale: boolean;
    mark: number;
    gapless: number;
    dolbyMark: number;
    picId_str: string;
  }

  export interface SqMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
  }

  export interface BMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
  }

  export interface HMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
  }

  export interface MMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
  }

  export interface LMusic {
    name?: any;
    id: number;
    size: number;
    extension: string;
    sr: number;
    dfsId: number;
    bitrate: number;
    playTime: number;
    volumeDelta: number;
  }

  export interface Song {
    name: string;
    id: number;
    position: number;
    alias: any[];
    status: number;
    fee: number;
    copyrightId: number;
    disc: string;
    no: number;
    artists: Artist[];
    album: Album;
    starred: boolean;
    popularity: number;
    score: number;
    starredNum: number;
    duration: number;
    playedNum: number;
    dayPlays: number;
    hearTime: number;
    sqMusic: SqMusic;
    hrMusic?: any;
    ringtone: string;
    crbt?: any;
    audition?: any;
    copyFrom: string;
    commentThreadId: string;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    copyright: number;
    transName?: any;
    sign?: any;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    single: number;
    noCopyrightRcmd?: any;
    mvid: number;
    bMusic: BMusic;
    mp3Url?: any;
    rtype: number;
    rurl?: any;
    hMusic: HMusic;
    mMusic: MMusic;
    lMusic: LMusic;
  }

  export interface RewardToplist {
    coverUrl: string;
    songs: Song[];
    name: string;
    position: number;
  }

  export interface ToplistDetail {
    code: number;
    list: List[];
    artistToplist: ArtistToplist;
    rewardToplist: RewardToplist;
  }
  // 歌单
  export interface Subscriber {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    avatarImgIdStr: string;
    anchor: boolean;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  }

  export interface Creator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    avatarImgIdStr: string;
    anchor: boolean;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  }

  export interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
  }

  export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
  }

  export interface H {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface M {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface Sq {
    br: number;
    fid: number;
    size: number;
    vd: number;
    sr: number;
  }

  export interface Track {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: M;
    l: L;
    sq: Sq;
    hr?: any;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: any;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    awardTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    alg?: any;
    displayReason?: any;
    rtype: number;
    rurl?: any;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
  }

  export interface TrackId {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
    dpr?: any;
  }

  export interface Playlist {
    id: number;
    name: string;
    coverImgId: number;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description: string;
    tags: string[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    detailPageTitle?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    copied: boolean;
    relateResType?: any;
    coverStatus: number;
    subscribers: Subscriber[];
    subscribed: boolean;
    creator: Creator;
    tracks: Track[];
    videoIds?: any;
    videos?: any;
    trackIds: TrackId[];
    bannedTrackIds?: any;
    mvResourceInfos?: any;
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    newDetailPageRemixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
    gradeStatus: string;
    score?: any;
    algTags?: any;
    distributeTags: any[];
    trialMode: number;
    displayTags?: any;
    playlistType: string;
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType?: any;
    cannotListenReason?: any;
    playReason?: any;
  }

  export interface ChargeInfoList {
    rate: number;
    chargeUrl?: any;
    chargeMessage?: any;
    chargeType: number;
  }

  export interface Privilege {
    id: number;
    fee: number;
    payed: number;
    realPayed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    pc?: any;
    toast: boolean;
    flag: number;
    paidBigBang: boolean;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl?: any;
    freeTrialPrivilege: FreeTrialPrivilege;
    rightSource: number;
    chargeInfoList: ChargeInfoList[];
  }

  export interface RootObjectPlaylistDetail {
    code: number;
    relatedVideos?: any;
    playlist: Playlist;
    urls?: any;
    privileges: Privilege[];
    sharedPrivilege?: any;
    resEntrance?: any;
    fromUsers?: any;
    fromUserCount: number;
    songFromUsers?: any;
  }
  // Mv
  export interface Artist {
    id: number;
    name: string;
  }

  export interface TagSign {
    br: number;
    type: string;
    tagSign: string;
    mvtype: string;
    resolution: number;
  }

  export interface Video {
    tagSign: TagSign;
    tag: string;
    url: string;
    duration: number;
    size: number;
    width: number;
    height: number;
    container: string;
    md5: string;
    check: boolean;
  }

  export interface Mv {
    authId: number;
    status: number;
    id: number;
    title: string;
    subTitle: string;
    appTitle: string;
    aliaName: string;
    transName: string;
    pic4v3: number;
    pic16v9: number;
    caption: number;
    captionLanguage: string;
    style?: any;
    mottos: string;
    oneword?: any;
    appword: string;
    stars?: any;
    desc: string;
    area: string;
    type: string;
    subType: string;
    neteaseonly: number;
    upban: number;
    topWeeks: string;
    publishTime: string;
    online: number;
    score: number;
    plays: number;
    monthplays: number;
    weekplays: number;
    dayplays: number;
    fee: number;
    artists: Artist[];
    videos: Video[];
  }

  export interface Artist {
    id: number;
    name: string;
  }

  export interface Data {
    id: number;
    cover: string;
    name: string;
    playCount: number;
    briefDesc?: any;
    desc?: any;
    artistName: string;
    artistId: number;
    duration: number;
    mark: number;
    mv: Mv;
    lastRank: number;
    score: number;
    subed: boolean;
    artists: Artist[];
    alias: string[];
  }

  export interface RootObjectTopMv {
    code: number;
    data: Data[];
    hasMore: boolean;
    updateTime: number;
  }
}
