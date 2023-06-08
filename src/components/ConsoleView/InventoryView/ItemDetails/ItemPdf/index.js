import React from "react";
import {
  Text,
  View,
  Svg,
  Path,
  Document,
  Page,
  Font,
} from "@react-pdf/renderer";
import { renderToStaticMarkup } from "react-dom/server";
import ReactHtmlParser from "react-html-parser";
import QRCode from "qrcode.react";
import palette from "../../../../../constants/palette";

const ItemPdf = ({ value, data }) => {
  const qrCodeComponent = <QRCode value={value} renderAs="svg" size={300} />;

  const qrCodeComponentStaticMarkup = renderToStaticMarkup(qrCodeComponent);
  const parsedQrCodeSvg = parseQrCodeMarkup(qrCodeComponentStaticMarkup);

  if (!parsedQrCodeSvg) {
    return null;
  }

  Font.register({
    family: "Courgette",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/courgette/v13/wEO_EBrAnc9BLjLQAUkFUfAL3EsHiA.ttf",
      },
    ],
  });

  return (
    <Document>
      <Page size="A4">
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              marginBottom: 12,
              color: palette.primary,
              fontFamily: "Courgette",
            }}
          >
            Alloy
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 24,
              color: palette.label_grey,
            }}
          >
            An Anti-Counterfeiting System!
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            This product is brought to you by {`${data?.company?.name}`}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12,
              color: palette.primary_light,
            }}
          >
            {`${data?.extra?.catalog?.name}`}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 24,
              color: palette.primary_light,
              opacity: 0.6,
            }}
          >
            {`${data?.extra?.catalog?.description}`}
          </Text>
          <Svg style={{ width: 300, height: 300 }} viewBox="0 0 33 33">
            {parsedQrCodeSvg.props.children
              .filter((c) => c.type === "path")
              .map((child, index) => (
                <Path key={index} d={child.props.d} fill={child.props.fill} />
              ))}
          </Svg>
          <Text
            style={{
              fontSize: 18,
              marginTop: 24,
              marginBottom: 12,
            }}
          >
            Sold by {`${data?.extra?.seller?.name}`}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            Seller Address: {`${data?.extra?.seller?.address}`}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            Seller Wallet Address: {`${data?.extra?.seller?.wallet_address}`}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const parseQrCodeMarkup = (markup) => {
  let parsedQrCodeSvg = null;

  ReactHtmlParser(markup).forEach((el) => {
    const { type } = el;

    if (type === "svg") {
      parsedQrCodeSvg = el;
    }
  });

  return parsedQrCodeSvg;
};

export default ItemPdf;
