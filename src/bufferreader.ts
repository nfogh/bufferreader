export class BufferReader {
  private readonly _buffer: Buffer;
  private _offset: number;

  constructor(buffer: Buffer, offset: number = 0) {
    this._buffer = buffer;
    this._offset = offset;
  }

  private checkSize(size: number): void {
    if (this._offset + size > this._buffer.length) {
      throw new Error('BufferReader: Attempted to read beyond buffer size');
    }
  }

  get offset(): number {
    return this._offset;
  }

  readUInt8(): number {
    this.checkSize(1)
    const value = this._buffer.readUInt8(this._offset);
    this._offset += 1;
    return value;
  }

  readInt8(): number {
    this.checkSize(1)
    const value = this._buffer.readInt8(this._offset);
    this._offset += 1;
    return value;
  }

  readUInt16LE(): number {
    this.checkSize(2)
    const value = this._buffer.readUInt16LE(this._offset);
    this._offset += 2;
    return value;
  }

  readUInt16BE(): number {
    this.checkSize(2)
    const value = this._buffer.readUInt16BE(this._offset);
    this._offset += 2;
    return value;
  }

  readInt16LE(): number {
    this.checkSize(2)
    const value = this._buffer.readInt16LE(this._offset);
    this._offset += 2;
    return value;
  }

  readInt16BE(): number {
    this.checkSize(2)
    const value = this._buffer.readInt16BE(this._offset);
    this._offset += 2;
    return value;
  }

  readInt32LE(): number {
    this.checkSize(4)
    const value = this._buffer.readInt32LE(this._offset);
    this._offset += 4;
    return value;
  }

  readInt32BE(): number {
    this.checkSize(4)
    const value = this._buffer.readInt32BE(this._offset);
    this._offset += 4;
    return value;
  }

  readUInt32LE(): number {
    this.checkSize(4)
    const value = this._buffer.readUInt32LE(this._offset);
    this._offset += 4;
    return value;
  }

  readUInt32BE(): number {
    this.checkSize(4)
    const value = this._buffer.readUInt32BE(this._offset);
    this._offset += 4;
    return value;
  }

  readBigInt64LE(): bigint {
    this.checkSize(8)
    const value = this._buffer.readBigInt64LE(this._offset);
    this._offset += 8;
    return value;
  }

  readBigInt64BE(): bigint {
    this.checkSize(8)
    const value = this._buffer.readBigInt64BE(this._offset);
    this._offset += 8;
    return value;
  }

  readBigUInt64LE(): bigint {
    this.checkSize(8)
    const value = this._buffer.readBigUInt64LE(this._offset);
    this._offset += 8;
    return value;
  }

  readBigUInt64BE(): bigint {
    this.checkSize(8)
    const value = this._buffer.readBigUInt64BE(this._offset);
    this._offset += 8;
    return value;
  }

  readBuffer(size: number): Buffer {
    this.checkSize(size)
    const value = this._buffer.subarray(this._offset, this._offset + size);
    this._offset += size;
    return value;
  }
}
