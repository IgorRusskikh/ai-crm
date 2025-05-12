import fetch, { FetchOptions } from 'node-fetch';

import { Injectable } from '@nestjs/common';
import { encode } from 'blurhash';
import sharp from 'sharp';

@Injectable()
export class BlurhashService {
  async encodeFromFile(filePath: string): Promise<string> {
    const image = sharp(filePath);
    const { data, info } = await image
      .resize(32, 32, { fit: 'inside' })
      .raw()
      .ensureAlpha()
      .toBuffer({ resolveWithObject: true });

    return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 3);
  }

  async encodeFromBuffer(buffer: Buffer): Promise<string> {
    const image = sharp(buffer);
    const { data, info } = await image
      .resize(32, 32, { fit: 'inside' })
      .raw()
      .ensureAlpha()
      .toBuffer({ resolveWithObject: true });

    return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 3);
  }

  async encodeFromUrl(
    url: string,
    fetchOptions?: FetchOptions
  ): Promise<string> {
    const response = await fetch(url, fetchOptions);
    const buffer = await response.arrayBuffer();

    return this.encodeFromBuffer(Buffer.from(buffer));
  }
}
