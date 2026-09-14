import { StyleSheet  } from 'react-native';

const simpleMarkdownStyles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: "#212529",
  },
  heading1: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#212529",
  },
  heading2: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#212529",
  },
  heading3: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#212529",
  },
  paragraph: {
    marginVertical: 8,
  },
  strong: {
    fontWeight: "bold",
  },
  code_inline: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
    fontFamily: "monospace",
    fontSize: 14,
  },
  code_block: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    fontFamily: "monospace",
  },
  blockquote: {
    backgroundColor: "#f8f9fa",
    borderLeftWidth: 4,
    borderLeftColor: "#dee2e6",
    paddingLeft: 12,
    paddingVertical: 8,
    marginVertical: 8,
  },
})

export default simpleMarkdownStyles;
