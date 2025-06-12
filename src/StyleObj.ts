const StyleObj = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  dashboardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  homeHeader: {
    backgroundColor: '#00A884',
    alignItems: 'center',
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#00A884',
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
  },
  headerBackTitle: {
    color: 'white',
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerIcon: {
    fontSize: 24,
    color: '#fff',
  },
  logo: {
    width: 80,
    height: 48,
    //aspectRatio: 1,
    marginBottom: 10,
    marginTop: 80,
  },
  locationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  location: {
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'Roboto-Regular',
  },
  locationLink: {
    color: '#E0F2F1',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto-Regular',
  },
  prayerTime: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto-Bold',
  },
  countdown: {
    color: '#E0F2F1',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Roboto-Regular',
  },
  date: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
    justifyContent: 'space-around',
  },
  featureItem: {
    width: '50%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  featureIcon: {
    fontSize: 26,
    paddingBottom: 5,
    //marginBottom: 5
  },
  featureTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Roboto-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Regular',
  },
  searchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  searchButtonText: {
    color: '#fff',
  },
  bannerContainer: {
    margin: 15,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  headlineSection: {
    // flex: 1,
    // width: '100%',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "white",
  },
  headlineTitle: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto-Bold',
    textAlign: "center",
  },
  headlineButtonClose:{
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
  },
  headlineButtonCloseText: {
    fontSize: 16,
    color: "#6c757d",
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Roboto-Regular',
  },
  navLabelActive: {
    color: '#00A884',
    fontFamily: 'Roboto-Medium',
  },
  surahList: {
    flex: 1,
  },
  surahItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  surahInfo: {
    flex: 1,
  },
  surahNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  surahName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  arabicName: {
    fontSize: 23,
    color: '#00A884',
    fontFamily: 'UthmanicArab-Regular',
  },
  description: {
    fontSize: 14,
    color: '#666',
    paddingLeft: 4,
  },
  numberCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#00A884',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00A884',
  },
  surahInfoDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#E8F5F3',
  },
  surahType: {
    fontSize: 14,
    color: '#666',
    paddingLeft:5
  },
  surahTitle: {
    fontSize: 24,
    // marginVertical: 8,
    fontFamily: 'AmiriQuran',
  },
  ayahCount: {
    fontSize: 14,
    color: '#666',
    paddingRight:5
  },
  content: {
    flex: 1,
    // padding: 16,
  },
  bismillah: {
    alignItems: 'center',
    //paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  verse: {
    //marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  arabicTextWrapper: {
    flexDirection: 'row',
  },
  arabicText: {
    fontSize: 23,
    textAlign: 'right',
    paddingBottom: 8,
    //lineHeight: 45,
    fontFamily: 'AmiriQuran',
  },
  arabicTextCaption: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 10,
    marginBottom: 8,
    //lineHeight: 30,
    fontFamily: 'AmiriQuran',
  },
  arabicNumberIndex: {
    paddingRight: 10,
    color: 'saddlebrown',
    fontFamily: 'UthmanicArab-Regular',
    fontSize: 28
  },
  arabicNumberCircle: {
    width: 30,
    height: 30,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#00A884',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transliteration: {
    fontSize: 15,
    color: '#009688',
    marginBottom: 4,
  },
  translation: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#8D8D8D'
  },
  tabItem: {
    flex:1,
  },
  tabItemInside: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  tabBar: {
    marginTop: 10,
    padding: 0,
  },
  tabIndicator: {
    backgroundColor: '#1fb89d'
  },
  tabActiveIndicator: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#1fb89d',
    
  },
  tabLabelActiveIndicator: {
    color: '#1fb89d'
  },
  indicator: {
    backgroundColor: '#1fb89d',
  },
   /** Content */
  settingContent: {
    paddingHorizontal: 16,
  },
  settingContentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  /** Section */
  settingSection: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  settingSectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  /** Profile */
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileBody: {
    marginRight: 'auto',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  /** Row */
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowIcon: {
    paddingRight: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#dc2626',
  },
  bottomSheetContainer: {
    flex: 1,
    // backgroundColor: 'grey',
  },
  bottomSheetcontentContainer: {
    paddingTop: 60, // Space for absolute header
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bottomSheetBody:{
    padding: 0,
  }
}

export default StyleObj;
