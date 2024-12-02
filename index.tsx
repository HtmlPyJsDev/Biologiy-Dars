import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#1a1a2e] text-[#e0e0e0] min-h-screen">
      <Header />
      <Navigation />
      <main className="p-5 max-w-4xl mx-auto bg-[#16213e] shadow-2xl rounded-xl mt-5">
        <ContentSection
          id="pka"
          title="PKA (Partial Kislorod Almashinuvi) nima?"
          content={`
            <div class="bg-[#0f3460] border-l-4 border-[#e94560] p-3 my-3 shadow-md">
              <p>PKA - bu qondagi kislorod miqdorini o'lchash uchun ishlatiladigan ko'rsatkich.</p>
            </div>
            <p>8"D" sinf o'quvchilari uchun tushuntirish: PKA - bu qonimizda qancha kislorod borligini ko'rsatadigan raqam. Bu xuddi termometr haroratni o'lchagani kabi, PKA qonimizdagi kislorodni "o'lchaydi".</p>
            <p>PKA qiymatini tushunish juda muhim, chunki u bizga qonimizda qancha kislorod borligini ko'rsatadi. Normal PKA qiymati taxminan 75-100 mm simob ustuni (mm Hg) orasida bo'ladi. Bu qiymat pasaysa, bu tanamizga yetarli kislorod yetib bormayotganini bildiradi.</p>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-[#e94560]">PKA va uning ahamiyati</h3>
            <ul class="list-disc pl-5 mb-3">
              <li>Kislorod yetkazib berish samaradorligini baholash</li>
              <li>Nafas olish kasalliklarini aniqlash</li>
              <li>Davolash samaradorligini kuzatish</li>
              <li>Jismoniy faollik chog'ida kislorod almashinuvini baholash</li>
            </ul>
          `}
          drawingPrompt="PKA kontseptsiyasini tasvirlang. Masalan, qon tomirlarini, o'pka va to'qimalarni chizing va PKA qiymatlarini ko'rsating."
        />
        
        <ContentSection
          id="exchange"
          title="To'qimalarda gazlar almashinuvi"
          content={`
            <p>To'qimalarda gazlar almashinuvi - bu kislorod va karbonat angidrid gazi o'rtasidagi almashinuv jarayoni. 8"D" sinf uchun oddiy misol:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Kislorod qondan to'qimalarga o'tadi - xuddi biz nafas olganimizdek</li>
              <li>Karbonat angidrid to'qimalardan qonga o'tadi - bu bizning "chiqindi" gazimiz</li>
            </ul>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-[#e94560]">Gazlar almashinuvi jarayoni</h3>
            <ol class="list-decimal pl-5 mb-3">
              <li>O'pkada havo pufakchalariga (alveolalarga) kislorod kiradi</li>
              <li>Kislorod qonga o'tadi va gemoglobin molekulalariga birikadi</li>
              <li>Kislorodga boy qon yurak orqali butun tanaga tarqaladi</li>
              <li>To'qimalarda kislorod qondan chiqib, hujayralarga kiradi</li>
              <li>Hujayralar kislorodni ishlatib, karbonat angidrid hosil qiladi</li>
              <li>Karbonat angidrid to'qimalardan qonga o'tadi</li>
              <li>Qon karbonat angidridni o'pkaga olib keladi</li>
              <li>O'pkada karbonat angidrid havoga chiqariladi</li>
            </ol>
            <p>Bu jarayon uzluksiz davom etadi va bizning hayotiy faoliyatimiz uchun juda muhimdir.</p>
          `}
          drawingPrompt="Gazlar almashinuvi jarayonini tasvirlang. O'pka, qon tomirlari, to'qimalar va gaz molekulalarini ko'rsating. Kislorod va karbonat angidrid oqimini strelkalar bilan belgilang."
        />
        
        <ContentSection
          id="importance"
          title="Gazlar almashinuvining ahamiyati"
          content={`
            <p>8"D" sinf o'quvchilari uchun gazlar almashinuvining muhimligi:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Hujayralarimizga "yoqilg'i" beradi - kislorod</li>
              <li>"Chiqindi" gazni chiqarib tashlaydi - karbonat angidrid</li>
              <li>Qonning pH muvozanatini saqlashga yordam beradi</li>
            </ul>
            <div class="bg-[#0f3460] border-l-4 border-[#e94560] p-3 my-3 shadow-md">
              <p>Eslatma: Gazlar almashinuvi to'g'ri ishlashi tanangiz yaxshi ishlashi uchun juda muhim!</p>
            </div>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-[#e94560]">Gazlar almashinuvining hayotiy ahamiyati</h3>
            <ol class="list-decimal pl-5 mb-3">
              <li>Energiya ishlab chiqarish: Kislorod hujayralarda glyukoza parchalanishida ishtirok etadi va energiya hosil qiladi.</li>
              <li>Metabolizmni qo'llab-quvvatlash: Kislorod ko'plab muhim biokimyoviy reaksiyalar uchun zarur.</li>
              <li>Toksinlarni chiqarish: Karbonat angidridni chiqarish orqali tana pH muvozanatini saqlaydi.</li>
              <li>Immunitet tizimini qo'llab-quvvatlash: Yetarli kislorod immun hujayralar faoliyati uchun muhim.</li>
              <li>Miya faoliyatini ta'minlash: Miya kislorodga juda talabchan a'zo bo'lib, doimiy ta'minotni talab qiladi.</li>
            </ol>
          `}
          drawingPrompt="Gazlar almashinuvining ahamiyatini ko'rsatadigan rasm chizing. Masalan, sog'lom va nosog'lom to'qimalarni taqqoslang, yoki turli a'zolarda kislorod va karbonat angidrid almashinuvini ko'rsating."
        />
        
        <ContentSection
          id="factors"
          title="Gazlar almashinuviga ta'sir qiluvchi omillar"
          content={`
            <p>8"D" sinf o'quvchilari uchun tushunarli bo'lgan omillar:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Qon oqimi tezligi - qanchalik tez yugursangiz, yuragingiz shunchalik tez uradi</li>
              <li>To'qimalarning kislorodga bo'lgan ehtiyoji - sport qilganda ko'proq kislorod kerak bo'ladi</li>
              <li>Qondagi gemoglobin miqdori - gemoglobin kislorodni tashiydi</li>
              <li>Atmosfera bosimi - tog'da nafas olish qiyinroq</li>
            </ul>
            <h3 class="text-xl font-semibold mt-4 mb-2 text-[#e94560]">Qo'shimcha ta'sir qiluvchi omillar</h3>
            <ol class="list-decimal pl-5 mb-3">
              <li>Harorat: Yuqori harorat kislorodning to'qimalarga o'tishini osonlashtiradi.</li>
              <li>pH darajasi: Qonning kislotalilik darajasi kislorodning gemoglobinga birikishiga ta'sir qiladi.</li>
              <li>Karbonat angidrid miqdori: Qonda ko'p CO2 bo'lsa, kislorod ajralib chiqishi osonlashadi.</li>
              <li>Jismoniy faollik: Mashq paytida to'qimalar ko'proq kislorod talab qiladi.</li>
              <li>Kasalliklar: Ba'zi kasalliklar (masalan, anemiya) gazlar almashinuviga salbiy ta'sir ko'rsatadi.</li>
            </ol>
            <p>Bu omillarni o'rganish orqali, biz tanamiz qanday ishlashini yaxshiroq tushunamiz va sog'ligimizni saqlashga yordam beramiz.</p>
          `}
          drawingPrompt="Gazlar almashinuviga ta'sir qiluvchi omillarni tasvirlovchi rasm chizing. Har bir omil uchun kichik tasvirlar yarating va ularning ta'sirini ko'rsating."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

