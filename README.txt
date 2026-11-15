SAMARKANDI — MULTI-PAGE HAJJ & UMRAH WEBSITE
============================================================

এই ZIP-এ সমরকন্দী হজ্জ কাফেলা ট্রাভেলস এন্ড ট্যুরস-এর জন্য একটি responsive, multi-page frontend website demo দেওয়া হয়েছে। আগের এক-পেজের layout-কে আলাদা HTML page-এ ভাগ করা হয়েছে। Warm ivory / emerald / gold visual theme এবং Makkah background design বজায় রাখা হয়েছে।

চালানোর নিয়ম
------------------------------------------------------------
1. ZIP Extract করুন।
2. OPEN_DEMO.bat-এ ডাবল-ক্লিক করুন, অথবা index.html Chrome / Edge-এ খুলুন।
3. VS Code Live Server ব্যবহার করলেও কাজ করবে। index.html-এ Live Server চালু করুন।
4. Google Fonts ও Madinah remote photograph লোডের জন্য ইন্টারনেট সংযোগ প্রয়োজন।

পেজসমূহ
------------------------------------------------------------
index.html          হোমপেজ, hero, trip planner, trust points ও quick links
 destinations.html  মক্কা-মদিনা গন্তব্য পরিচিতি ও অফিসিয়াল তথ্যের লিংক
packages.html       হজ/ওমরাহ নমুনা প্যাকেজ, filter, enquiry modal ও compare table
process.html        কাজের ধাপ, preparation guide, interactive checklist ও FAQ
contact.html        অফিসের ঠিকানা, ফোন, Google Maps ও WhatsApp enquiry form
planner.html        বিস্তারিত সফর পরিকল্পনা ফর্ম (budget/room/hotel preference সহ)
styles.css          সব পেজের shared design ও responsive styles
script.js           navigation, filtering, forms, WhatsApp ও checklist interactions
assets/             স্থানীয় Makkah hero images

যে ফিচারগুলো কাজ করে
------------------------------------------------------------
- Header navigation এখন আলাদা পেজে নিয়ে যায়; সব কনটেন্ট আর এক পেজে জমা নেই।
- Desktop ও mobile navigation-এ বর্তমান পেজ active দেখায়।
- হোমপেজের trip planner card এখন hero photograph-এর নিচে normal document flow-তে থাকে; ছবির ওপর ভাসে না।
- Homepage quick-link cards থেকে সংশ্লিষ্ট পেজে যাওয়া যায়।
- Package category filter (সব / ওমরাহ / হজ)।
- Package detail enquiry modal থেকে WhatsApp বার্তা তৈরি হয়।
- আলাদা planner page-এ সময়, মেয়াদ, যাত্রী, বাজেট, রুম, হোটেল-পছন্দ ও নোট নিয়ে WhatsApp enquiry তৈরি হয়।
- Contact form WhatsApp-এ বার্তা তৈরি করে।
- Preparation checklist-এ tick দিলে progress percentage আপডেট হয়; print button দিয়ে checklist প্রিন্ট করা যায়।
- FAQ accordion, official Hajj / Nusuk link, floating WhatsApp shortcut ও responsive mobile menu।
- Date picker-এ অতীত মাস নির্বাচন সীমাবদ্ধ করা হয়।

গুরুত্বপূর্ণ সীমাবদ্ধতা
------------------------------------------------------------
এটি Frontend Design Demo; Production Booking System নয়।
- কোনো booking, customer record বা form submission database-এ সংরক্ষণ করা হয় না।
- ফর্মগুলো WhatsApp-এ pre-filled message তৈরি করে; ব্যবহারকারীকে নিজে Send চাপতে হবে।
- Live price, seat availability, payment gateway, visa verification বা booking confirmation নেই।
- প্যাকেজের বর্ণনা/মেয়াদ নমুনা কনটেন্ট। বাস্তব প্যাকেজ, মূল্য, ফ্লাইট, হোটেল, রুম শেয়ারিং, ভিসা, অন্তর্ভুক্ত সুবিধা, বাতিল ও refund policy অফিস থেকে নিশ্চিত করে আপডেট করতে হবে।
- অফিসের ঠিকানা ও ফোন নম্বর প্রকাশের আগে যাচাই করুন। সৌদি নম্বরের display format ও tel link-টিও প্রকাশের আগে নিশ্চিত করুন।
- কোনো agency licence/accreditation দাবি এই demo-তে যোগ করা হয়নি। প্রযোজ্য হলে যাচাইকৃত তথ্য আলাদাভাবে যুক্ত করবেন।
- Hajj ও Umrah-এর নিয়ম, নিবন্ধন, permit এবং visa requirements পরিবর্তিত হতে পারে। বর্তমান তথ্যের জন্য official source দেখুন।

অফিসিয়াল তথ্যসূত্র
------------------------------------------------------------
Bangladesh Hajj Management Portal: https://www.hajj.gov.bd/
Nusuk Umrah (Saudi official platform): https://umrah.nusuk.sa/
Nusuk Hajj & Umrah: https://www.nusuk.sa/

ডিজাইন নোট
------------------------------------------------------------
- Cream / emerald / gold palette এবং hero photo concept মূল design থেকে রাখা হয়েছে।
- Desktop ও mobile-এর জন্য আলাদা responsive layout আছে।
- Madinah image: Unsplash photo page (original source noted in prior project README):
  https://unsplash.com/photos/al-masjid-al-nabawi-in-medina-MZtJeJ6_7BI
- Live commercial deployment-এর আগে image license ও external asset terms পুনরায় যাচাই করুন।
