import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class StageTabs extends React.Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">Qualification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Discovery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Demo</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Obstacles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Negotiation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Summary</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="1">
                <p>
                  "Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor (N. del T. persona que se dedica a la imprenta)
                  desconocido usó una galería de textos y los mezcló de tal
                  manera que logró hacer un libro de textos especimen. No sólo
                  sobrevivió 500 años, sino que tambien ingresó como texto de
                  relleno en documentos electrónicos, quedando esencialmente
                  igual al original. Fue popularizado en los 60s con la creación
                  de las hojas "Letraset", las cuales contenian pasajes de Lorem
                  Ipsum, y más recientemente con software de autoedición, como
                  por ejemplo Aldus PageMaker, el cual incluye versiones de
                  Lorem Ipsum"
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <p>
                  "التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
                  التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
                  توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
                  محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها
                  نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات
                  الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا
                  قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من
                  المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ
                  جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة،
                  وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها."
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <p>
                  "O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                  Este texto não só sobreviveu 5 séculos, mas também o salto
                  para a tipografia electrónica, mantendo-se essencialmente
                  inalterada. Foi popularizada nos anos 60 com a
                  disponibilização das folhas de Letraset, que continham
                  passagens com Lorem Ipsum, e mais recentemente com os
                  programas de publicação como o Aldus PageMaker que incluem
                  versões do Lorem Ipsum"
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <p>
                  "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                  zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                  bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
                  zethaak met letters nam en ze door elkaar husselde om een
                  font-catalogus te maken. Het heeft niet alleen vijf eeuwen
                  overleefd maar is ook, vrijwel onveranderd, overgenomen in
                  elektronische letterzetting. Het is in de jaren '60 populair
                  geworden met de introductie van Letraset vellen met Lorem
                  Ipsum passages en meer recentelijk door desktop publishing
                  software zoals Aldus PageMaker die versies van Lorem Ipsum
                  bevatten."
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <p>
                  "Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους
                  επαγγελματίες της τυπογραφίας και στοιχειοθεσίας. Το Lorem
                  Ipsum είναι το επαγγελματικό πρότυπο όσον αφορά το κείμενο
                  χωρίς νόημα, από τον 15ο αιώνα, όταν ένας ανώνυμος τυπογράφος
                  πήρε ένα δοκίμιο και ανακάτεψε τις λέξεις για να δημιουργήσει
                  ένα δείγμα βιβλίου. Όχι μόνο επιβίωσε πέντε αιώνες, αλλά
                  κυριάρχησε στην ηλεκτρονική στοιχειοθεσία, παραμένοντας με
                  κάθε τρόπο αναλλοίωτο. Έγινε δημοφιλές τη δεκαετία του '60 με
                  την έκδοση των δειγμάτων της Letraset όπου περιελάμβαναν
                  αποσπάσματα του Lorem Ipsum, και πιο πρόσφατα με το λογισμικό
                  ηλεκτρονικής σελιδοποίησης όπως το Aldus PageMaker που
                  περιείχαν εκδοχές του Lorem Ipsum."
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="6">
                <p>
                  "Lorem Ipsum，也称乱数假文或者哑元文本，
                  是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                  Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                  Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
                  PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野"
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
