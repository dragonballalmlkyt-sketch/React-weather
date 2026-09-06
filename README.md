# 🌤️ تطبيق حالة الطقس (Weather App)

تطبيق ويب تفاعلي وبسيط لعرض حالة الطقس في مختلف المدن حول العالم والمحافظات المصريةا.

---

## 🚀 المميزات (Features)


* 🔍 **بحث سريع:** إمكانية البحث عن حالة الطقس لجميع المحافظات والمدن.
* 📊 **تفاصيل الطقس:** عرض درجات الحرارة (العظمى والصغرى)، نسبة الرطوبة، سرعة الرياح، والشعور الحراري.
* 📱 **تصميم تجاوبي (Responsive Design):** يتوافق مع جميع الشاشات والأجهزة المحمولة.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

* **[React.js](https://reactjs.org/)** - مكتبة واجهات المستخدم.
* **[OpenWeatherMap API](https://openweathermap.org/api)** *(أو الـ API المستخدم لديك)* - لجلب بيانات الطقس المباشرة.
* **CSS3 / Material UI / Bootstrap** - لتنسيق الواجهة والمكونات Visuals.

---

## 💻 طريقة التشغيل محلياً (Getting Started)

### المتطلبات الأساسية:
* تثبيت **[Node.js](https://nodejs.org/)** (الإصدار 16 أو أعلى).

### خطوات التشغيل:

1. **استنساخ المستودع (Clone):**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
   cd YOUR_REPOSITORY_NAME
   ```

2. **تثبيت الحزم والمكتبات (Install Dependencies):**
   ```bash
   npm install
   ```

3. **تشغيل المشروع (Run Project):**
   ```bash
   npm start
   ```

سيعمل التطبيق على الرابط التالي: `http://localhost:3000`

---

## 📁 هيكل الترجمة (Locales)

تم تنفيذه باستخدام نظام **Key-Value مسطح (Flat JSON)** لضمان أداء سريع وسهولة في الاستدعاء:

```json
{
  "clear_sky": "سماء صافية",
  "humidity": "الرطوبة",
  "cairo": "القاهرة"
}
```

---

## 📝 الترخيص (License)

هذا المشروع متاح تحت رخصة [MIT](LICENSE).