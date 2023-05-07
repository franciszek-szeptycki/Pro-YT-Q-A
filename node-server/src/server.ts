import * as express from 'express';
import * as PDFDocument from 'pdfkit';
import * as cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/pdf', (req: {body: { data: DataType[]}}, res: any) => {
    const {data}: {data: DataType[]} = req.body;
    const doc = new PDFDocument();
    res.attachment('output.pdf');
    doc.pipe(res);

    doc.font('assets/fonts/OpenSans-Regular.ttf')

    try {
        data.map(item => {
            doc.fontSize(12).text(`( ${item.like_count} ) ${item.user_name}:`)
                .fontSize(10).text(item.text)
                .moveDown()
        })
    } catch {
    } finally {
        doc.end();
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});


type DataType = {
    id: number
    user_name: string
    profile_url: string
    text: string
    like_count: string
    published_at: string
}