import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import logo from "../../assets/logo.png";
import moment from "moment";
import { deployURL } from "../../constants";

export const PDFDocument = ({
  title,
  texts,
}: {
  title: string;
  texts: string[];
}) => {
  return (
    <Document>
      <Page style={styles.body} size="C5">
        <View fixed style={styles.header}>
          <View style={styles.headerLogo}>
            <Link src={deployURL} style={styles.image}>
              <Image style={styles.image} src={logo} />
            </Link>
          </View>
          <View style={styles.headerTitle}>
            <Text
              style={styles.headerText}
            >{`Profissional: Fulano de tal`}</Text>
            <Text style={styles.headerText}>{`Telefone: (11) 99999-9999`}</Text>
            <Text
              style={[styles.headerText, { marginBottom: 0 }]}
            >{`Data: ${moment().format("DD/MM/YYYY")}`}</Text>
          </View>
        </View>
        <Text style={styles.title}>Lista de materiais</Text>
        {/* <Text style={styles.author}>Miguel de Cervantes</Text> */}
        <Text style={styles.subtitle}>{title}</Text>
        {texts.map((text, index) => (
          <Text style={styles.text} key={index}>
            {text}
          </Text>
        ))}
        {/* <Text style={styles.text} break>
          Uma pagina
        </Text> */}
        <View fixed style={styles.footer}>
          <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <Text style={[styles.footerText]}>
              {`Acesse: `}
              <Link
                style={[styles.footerText, { color: "blue" }]}
                src={deployURL}
              >{`Smart Obra App`}</Link>
            </Text>
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Lato",
  // src: "https://fonts.gstatic.com/l/font?kit=S6u8w4BMUTPHh30wXj2_PHCJjrlQiJMwv6CqfvzZQQ&skey=cfa1ba7b04a1ba34&v=v24",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30wWyWrFCbw7A.ttf",
      fontWeight: "light",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u-w4BMUTPHjxsIPy-vNiPg7MU0.ttf",
      fontWeight: "light",
      fontStyle: "italic",
    },

    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf",
      fontWeight: "medium",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI9w2PHA3s5dwt7w.ttf",
      fontWeight: "medium",
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHvxk6XweuBCY.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHjxswWyWrFCbw7A.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf",
      fontWeight: "heavy",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI5wqPHA3s5dwt7w.ttf",
      fontWeight: "heavy",
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50Xew-FGC_p9dw.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/lato/v24/S6u_w4BMUTPHjxsI3wiPHA3s5dwt7w.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 35,
  },
  title: {
    paddingTop: 10,
    borderTop: "3px dashed #E0E0E0",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Lato",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "Lato",
  },
  subtitle: {
    fontSize: 16,
    margin: 10,
    fontFamily: "Lato",
  },
  text: {
    marginBottom: 8,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Lato",
  },
  image: {
    width: "100%",
    borderRadius: "8px",

    // marginVertical: 15,
    // marginHorizontal: 100,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: "left",
    fontFamily: "Lato",
    // color: "grey",
  },
  pageNumber: {
    fontSize: 12,
    textAlign: "center",
    width: "100%",
  },
  headerLogo: {
    display: "flex",
    width: "60%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textLogo: {
    fontSize: "24px",
    fontFamily: "Lato",
  },
  headerTitle: {
    width: "40%",
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: "16px",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    paddingLeft: "16px",
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Lato",
    color: "grey",
  },
});
