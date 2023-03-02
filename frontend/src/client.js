import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: "",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);