import { text } from "@fortawesome/fontawesome-svg-core";
import { height } from "@fortawesome/free-solid-svg-icons/faHome";

const StyleObj = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  header: {
    backgroundColor: '#00A884',
    padding: 20,
    alignItems: 'center',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
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
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    justifyContent: 'space-between',
  },
  featureItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  featureTitle: {
    fontSize: 12,
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
    margin: 15,
  },
  headlineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto-Bold',
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
    fontSize: 24,
    color: '#00A884',
    fontFamily: 'UthmanicArab-Regular',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
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
    fontFamily: 'UthmanicArab-Regular',
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
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  verse: {
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  arabicTextWrapper: {
    flexDirection: 'row',
  },
  arabicText: {
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 8,
    lineHeight: 40,
    fontFamily: 'UthmanicArab-Regular',
  },
  arabicTextCaption: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 30,
    fontFamily: 'UthmanicArab-Regular',
  },
  arabicNumberIndex: {
    paddingRight: 10,
    color: 'saddlebrown',
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
  },
  tabItem: {
    padding: 0,
    width: 110,
    height: 40,
    flex:1,
  },
  tabBar: {
    padding: 0,
  },
  tabIndicator: {
    backgroundColor: '#1fb89d',
  },
  indicator: {
    backgroundColor: '#1fb89d',
  }

}

export default StyleObj;
