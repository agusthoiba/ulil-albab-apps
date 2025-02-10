import { StyleSheet  } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Roboto_400Regular',
  },
  header: {
    backgroundColor: '#00A884',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    width: 150,
    height: 40,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
  },
  locationLink: {
    color: '#E0F2F1',
    textDecorationLine: 'underline',
    fontFamily: 'Roboto_400Regular',
  },
  prayerTime: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto_700Bold',
  },
  countdown: {
    color: '#E0F2F1',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
  },
  date: {
    color: '#E0F2F1',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
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
    fontFamily: 'Roboto_400Regular',
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
    fontFamily: 'Roboto_400Regular',
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
    fontFamily: 'Roboto_700Bold',
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
    fontFamily: 'Roboto_400Regular',
  },
  navLabelActive: {
    color: '#00A884',
    fontFamily: 'Roboto_500Medium',
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
    fontSize: 20,
    color: '#00A884',
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
})
  
export default Styles;
