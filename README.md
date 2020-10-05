# Caesar Cipher CLI Tool

You can use this tool to encrypt and decrypt your data (English characters only).

## How to use this tool

**Go to the caesar-cipher-cli folder and run the command:**

```javascript
npm install
```

**Go to the ceaser-cypher folder and run the command:**:

```javascript
node caesar-cipher --action encode --shift 7 --input plain.txt --output encoded.txt
node caesar-cipher --action decode --shift 7 --input decoded.txt --output plain.txt
node caesar-cipher -a encode -s 7 -i "./input.txt" -o "./output.txt"
node caesar-cipher -a encode -s 7 -i "C:/folder/input.txt" -o "C:/folder/output.txt"
```

**Details:**

1. --action

- required
- accepts encode or decode only

2. --shift

- required
- accepts positive or negative integer
  --shift -7 or --shift "7" are valid and will be transformed to --shift 7

3. --input

- optional
- here you can specify the name of the input file
- the file should be in the same directory as the caesar-cipher script
- if not specified, the tool will ask you to write your input in the console

4. --output

- optional
- here you can specify the name of the output file
- the file should be in the same directory as the caesar-cipher script
- if not specified, the tool will print your output in the console
