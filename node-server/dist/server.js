"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PDFDocument = require("pdfkit");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.post('/pdf', (req, res) => {
    const { data } = req.body;
    const doc = new PDFDocument();
    res.attachment('output.pdf');
    doc.pipe(res);
    doc.font('assets/fonts/OpenSans-Regular.ttf');
    try {
        data.map(item => {
            doc.fontSize(12).text(`( ${item.like_count} ) ${item.user_name}:`)
                .fontSize(10).text(item.text)
                .moveDown();
        });
    }
    catch (_a) {
    }
    finally {
        doc.end();
    }
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
//# sourceMappingURL=server.js.map