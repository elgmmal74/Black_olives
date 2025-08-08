// Menu toggle functionality
const menuButton  = document.getElementById("menu-button")
const navigation = document.querySelector(".header__nav")
menuButton.addEventListener("click", () => navigation.classList.toggle("active"))

// Chatbot data
const chatbotResponses = {
  greetings: [
    "أهلاً وسهلاً بكم في مطعم الزيتون الأسود! 🫒 كيف يمكنني مساعدتكم؟",
    "مرحباً وأهلاً! أنا مساعد مطعم الزيتون الأسود الفلسطيني، كيف يمكنني خدمتكم؟",
    "أهلاً بكم! سعيد لرؤيتكم هنا، كيف يمكنني مساعدتكم اليوم؟"
  ],

  menu: {
    general: `قائمة طعامنا تتضمن أشهى الأطباق الفلسطينية الأصيلة! 🍽️

• المقلوبة الفلسطينية (أرز مع اللحم والخضار)
• المسخن النابلسي (خبز مع الدجاج والسماق)
• الكبة النابلسية والشامية
• المحاشي الفلسطينية (كوسا، باذنجان، ورق عنب)
• الفتة المقدسية
• المنسف الأردني الفلسطيني
• الكنافة النابلسية والمعمول

هل تريدون معرفة المزيد عن طبق معين؟`,

    maqluba: `المقلوبة الفلسطينية 🍚
طبق تراثي فلسطيني شهير يتكون من الأرز المطبوخ مع اللحم أو الدجاج والخضار المقلية مثل الباذنجان والقرنبيط والجزر، يُقدم مقلوباً في طبق كبير مع اللبن الرائب والسلطة.`,

    musakhan: `المسخن النابلسي 🥖
طبق فلسطيني تقليدي من نابلس، يتكون من خبز الطابون مع قطع الدجاج المطبوخة بالبصل والسماق وزيت الزيتون والصنوبر، يُعتبر من أشهر الأطباق الفلسطينية.`
  },

  location: {
    address: `📍 موقعنا:
شارع التحرير
وسط البلد، القاهرة
جمهورية مصر العربية

نحن في قلب القاهرة، في منطقة وسط البلد التاريخية!`,

    directions: `يمكنكم الوصول إلينا بسهولة:
🚇 أقرب محطة مترو: السادات (التحرير)
🚌 خطوط الأتوبيس: جميع الخطوط المتجهة لميدان التحرير
🚗 مواقف سيارات متاحة في المنطقة
🚕 تاكسي أو أوبر متاح دائماً`
  },

  hours: `⏰ ساعات العمل:

🗓️ السبت - الخميس: 1:00 ظهراً - 12:00 منتصف الليل
🗓️ الجمعة: 2:00 ظهراً - 1:00 صباحاً (بعد صلاة الجمعة)

نحن مفتوحون كل أيام الأسبوع لخدمتكم!
🕌 نراعي أوقات الصلاة في مواعيد العمل`,

  booking: `📞 لحجز طاولة:

✉️ البريد الإلكتروني: blackolives@contact.com
📱 الهاتف: 02-25555555
📱 واتساب: 01012345678

💡 ننصح بالحجز المسبق، خاصة في عطلات نهاية الأسبوع والمناسبات!

هل تريدون معرفة المزيد عن خدماتنا؟`,

  chef: `👨‍🍳 الشيف أحمد أبو سالم

شيف فلسطيني مبدع، ولد ونشأ في مدينة نابلس وتعلم فنون الطبخ الفلسطيني من جدته الحاجة فاطمة. يتميز الشيف أحمد بخبرته الواسعة في إعداد الأطباق الفلسطينية التراثية مع لمسة عصرية مميزة.

حاصل على شهادات في فنون الطهي من معاهد عالمية، لكنه يحافظ على الأصالة الفلسطينية في كل أطباقه. له خبرة أكثر من 15 عاماً في المطابخ العربية والشرق أوسطية، وهو مؤلف كتاب "نكهات من فلسطين" الذي يضم أشهر الوصفات الفلسطينية التراثية.`,

  facilities: {
    dining: `🍽️ قاعة الطعام:
تحتوي على العديد من المقاعد والطاولات الخشبية الجميلة مزينة بالطراز الفلسطيني التراثي. جميع الطاولات يمكن تغطيتها بقماش أبيض أنيق. طاقم الخدمة لدينا مهذب ومتميز في السرعة والضيافة العربية الأصيلة.`,

    bar: `☕ منطقة المشروبات:
مليئة بأشهى أنواع الشاي والقهوة العربية والعصائر الطبيعية. لدينا الشاي الفلسطيني بالنعناع والقهوة العربية المحمصة طازجاً. المشروبات التقليدية والعصائر الطازجة ستجعل تجربتكم مميزة!`
  },

  contact: `📞 للتواصل معنا:

✉️ البريد الإلكتروني: blackolives@contact.com
📱 الهاتف: 02-25555555
📱 واتساب: 01012345678
📍 العنوان: شارع التحرير، وسط البلد، القاهرة، مصر

نحن هنا لخدمتكم دائماً! 😊`,

  about: `🫒 عن مطعم الزيتون الأسود:

نحن مطعم فلسطيني أصيل في قلب القاهرة يقدم أشهى الأطباق التراثية الفلسطينية. كل منطقة في فلسطين - بل كل بيت - له نسخته الخاصة من المقلوبة والمسخن والكنافة. نحن نقدم هذه الأطباق بأصالتها وطعمها التقليدي الرائع الذي توارثناه عبر الأجيال.

تجربة طعام لا تُنسى تأخذكم في رحلة إلى قلب فلسطين الحبيبة! 🇵🇸`,

  default: `عذراً، لم أفهم سؤالكم بوضوح. 😅

يمكنكم سؤالي عن:
• القائمة والأطباق الفلسطينية
• الموقع والاتجاهات
• ساعات العمل
• حجز الطاولات
• الشيف والمرافق
• معلومات التواصل

أو استخدموا الأزرار السريعة أدناه! 👇`
};

// Keywords for intent recognition
const keywords = {
  greetings: ['مرحبا', 'أهلا', 'سلام', 'hello', 'hi', 'hey', 'مساء الخير', 'صباح الخير'],
  menu: ['قائمة', 'طعام', 'أكل', 'menu', 'food', 'مقلوبة', 'مسخن', 'كنافة', 'محاشي', 'كبة', 'منسف', 'فتة'],
  location: ['موقع', 'عنوان', 'أين', 'location', 'address', 'where', 'directions', 'اتجاهات', 'التحرير', 'القاهرة'],
  hours: ['ساعات', 'وقت', 'متى', 'hours', 'time', 'open', 'مفتوح', 'مغلق'],
  booking: ['حجز', 'طاولة', 'reservation', 'book', 'table', 'موعد'],
  chef: ['شيف', 'طباخ', 'chef', 'أحمد', 'أبو سالم'],
  facilities: ['مرافق', 'قاعة', 'بار', 'dining', 'bar', 'facilities', 'مشروبات'],
  contact: ['تواصل', 'اتصال', 'contact', 'phone', 'email', 'هاتف', 'ايميل', 'واتساب'],
  about: ['عن', 'about', 'معلومات', 'info', 'تعريف', 'فلسطيني', 'فلسطين']
};

// Chatbot functionality
class ChatBot {
  constructor() {
    this.isOpen = false;
    this.initializeElements();
    this.bindEvents();
  }

  initializeElements() {
    this.toggle = document.getElementById('chatbot-toggle');
    this.window = document.getElementById('chatbot-window');
    this.closeBtn = document.getElementById('chatbot-close');
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.sendBtn = document.getElementById('chatbot-send');
    this.quickActionBtns = document.querySelectorAll('.quick-action-btn');
  }

  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleChat());
    this.closeBtn.addEventListener('click', () => this.closeChat());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    this.quickActionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        this.handleQuickAction(action);
      });
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.window.classList.toggle('active', this.isOpen);
    if (this.isOpen) {
      this.input.focus();
    }
  }

  closeChat() {
    this.isOpen = false;
    this.window.classList.remove('active');
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    this.input.value = '';

    // Simulate typing delay
    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 500);
  }

  addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content.replace(/\n/g, '<br>');

    messageDiv.appendChild(contentDiv);
    this.messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    if (this.matchesKeywords(lowerMessage, keywords.greetings)) {
      return this.getRandomResponse(chatbotResponses.greetings);
    }

    // Check for menu queries
    if (this.matchesKeywords(lowerMessage, keywords.menu)) {
      if (lowerMessage.includes('مقلوبة') || lowerMessage.includes('maqluba')) {
        return chatbotResponses.menu.maqluba;
      }
      if (lowerMessage.includes('مسخن') || lowerMessage.includes('musakhan')) {
        return chatbotResponses.menu.musakhan;
      }
      return chatbotResponses.menu.general;
    }

    // Check for location queries
    if (this.matchesKeywords(lowerMessage, keywords.location)) {
      if (lowerMessage.includes('اتجاهات') || lowerMessage.includes('directions')) {
        return chatbotResponses.location.directions;
      }
      return chatbotResponses.location.address;
    }

    // Check for hours
    if (this.matchesKeywords(lowerMessage, keywords.hours)) {
      return chatbotResponses.hours;
    }

    // Check for booking
    if (this.matchesKeywords(lowerMessage, keywords.booking)) {
      return chatbotResponses.booking;
    }

    // Check for chef
    if (this.matchesKeywords(lowerMessage, keywords.chef)) {
      return chatbotResponses.chef;
    }

    // Check for facilities
    if (this.matchesKeywords(lowerMessage, keywords.facilities)) {
      if (lowerMessage.includes('مشروبات') || lowerMessage.includes('بار') || lowerMessage.includes('bar')) {
        return chatbotResponses.facilities.bar;
      }
      return chatbotResponses.facilities.dining;
    }

    // Check for contact
    if (this.matchesKeywords(lowerMessage, keywords.contact)) {
      return chatbotResponses.contact;
    }

    // Check for about
    if (this.matchesKeywords(lowerMessage, keywords.about)) {
      return chatbotResponses.about;
    }

    // Default response
    return chatbotResponses.default || "عذراً، لم أفهم سؤالكم بوضوح. 😅";
  }

  matchesKeywords(message, keywordList) {
    return keywordList.some(keyword => message.includes(keyword));
  }

  getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  handleQuickAction(action) {
    let response = '';

    switch(action) {
      case 'menu':
        response = chatbotResponses.menu.general;
        break;
      case 'location':
        response = chatbotResponses.location.address;
        break;
      case 'booking':
        response = chatbotResponses.booking;
        break;
      case 'hours':
        response = chatbotResponses.hours;
        break;
      default:
        response = "كيف يمكنني مساعدتك؟ 😊";
    }

    this.addMessage(response, 'bot');
  }
}

// Menu Animation on Scroll
function initMenuAnimation() {
  const menuItems = document.querySelectorAll('.menu__item');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 200); // Stagger animation by 200ms
      }
    });
  }, observerOptions);

  menuItems.forEach(item => {
    observer.observe(item);
  });
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ChatBot();
  initMenuAnimation();
});