export const BASE_URL = 'http://localhost:5000';
export const STATICS=`${BASE_URL}/static/uploads/`
export const AdvisorRegistreApi=`${BASE_URL}/auth/register/moshaver`
export const RealStateRegistrationApi=`${BASE_URL}/auth/register/amlak`
export const PhoneNamberApi=`${BASE_URL}/auth/register/phone-number`
export const VerifyPhoneNumberApi=`${BASE_URL}/auth/register/phone-number/verify`
export const ArticlesApi=`${BASE_URL}/articles`
export const ContactApi=`${BASE_URL}/contact`
export const NewsApi=`${BASE_URL}/property/add`
export const PropertiesApi=`${BASE_URL}/properties`
export const SingleBlogApi=(normalName)=>`${BASE_URL}/articles/single?normalName=${normalName}`