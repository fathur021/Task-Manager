const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');

        const db = client.db(namaDatabase);
        const clPengguna = db.collection('pengguna');

        // Mencari pengguna berdasarkan nama 'Fathur'
        const byNama = await clPengguna.findOne({
            nama: 'Fathur'
        });
        console.log('Data Pengguna ditemukan (berdasarkan nama):', byNama);

        // Mencari pengguna dengan usia 20
        const penggunaDenganUsia20 = await clPengguna.find({
            usia: 20
        }).toArray();
        console.log('Data Pengguna ditemukan (dalam format Array):', penggunaDenganUsia20);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
