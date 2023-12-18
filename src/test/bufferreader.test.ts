import { BufferReader } from '../bufferreader';
import { expect } from 'chai';

describe('BufferReader', () => {
    let bufferReader: BufferReader;

    it('should read an unsigned 8-bit integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readUInt8();
        expect(result).equals(1);
        expect(bufferReader.offset).equals(1);
    });

    it('should read a signed 8-bit integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readInt8();
        expect(result).equals(1);
        expect(bufferReader.offset).equals(1);
    });

    it('should read an unsigned 16-bit little-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readUInt16LE();
        expect(result).equals(513);
        expect(bufferReader.offset).equals(2);
    });

    it('should read an unsigned 16-bit big-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readUInt16BE();
        expect(result).equals(258);
        expect(bufferReader.offset).equals(2);
    });

    it('should read a signed 16-bit little-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0x7F, 0xFF, 0x03, 0x04]));
        const result = bufferReader.readInt16LE();
        expect(result).equals(-129);
        expect(bufferReader.offset).equals(2);
    });

    it('should read a signed 16-bit big-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0xFF, 0x7F, 0x03, 0x04]));
        const result = bufferReader.readInt16BE();
        expect(result).equals(-129);
        expect(bufferReader.offset).equals(2);
    });

    it('should read an unsigned 32-bit little-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readUInt32LE();
        expect(result).equals(67305985);
        expect(bufferReader.offset).equals(4);
    });

    it('should read an unsigned 32-bit big-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const result = bufferReader.readUInt32BE();
        expect(result).equals(16909060);
        expect(bufferReader.offset).equals(4);
    });

    it('should read a signed 32-bit little-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0x7F, 0xFF, 0xFF, 0xFF]));
        const result = bufferReader.readInt32LE();
        expect(result).equals(-129);
        expect(bufferReader.offset).equals(4);
    });

    it('should read a signed 32-bit big-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0xFF, 0xFF, 0xFF, 0x7F]));
        const result = bufferReader.readInt32BE();
        expect(result).equals(-129);
        expect(bufferReader.offset).equals(4);
    });

    it('should read an unsigned 64-bit little-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]));
        const result = bufferReader.readBigUInt64LE();
        expect(result).equals(578437695752307201n);
        expect(bufferReader.offset).equals(8);
    });

    it('should read an unsigned 64-bit big-endian integer', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08]));
        const result = bufferReader.readBigUInt64BE();
        expect(result).equals(72623859790382856n);
        expect(bufferReader.offset).equals(8);
    });

    it('should read a signed 64-bit little-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]));
        const result = bufferReader.readBigInt64LE();
        expect(result).equals(-129n);
        expect(bufferReader.offset).equals(8);
    });

    it('should read a signed 64-bit big-endian integer with sign bit set', () => {
        bufferReader = new BufferReader(Buffer.from([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x7F]));
        const result = bufferReader.readBigInt64BE();
        expect(result).equals(-129n);
        expect(bufferReader.offset).equals(8);
    });

    it('should read a buffer of specified size', () => {
        bufferReader = new BufferReader(Buffer.from([0x01, 0x02, 0x03, 0x04]));
        const buffer1 = bufferReader.readBuffer(2)
        expect(buffer1[0]).equals(0x01);
        expect(buffer1[1]).equals(0x02);
        expect(bufferReader.offset).equals(2);
        const buffer2 = bufferReader.readBuffer(2)
        expect(buffer2[0]).equals(0x03);
        expect(buffer2[1]).equals(0x04);
        expect(bufferReader.offset).equals(4);
    });
});
