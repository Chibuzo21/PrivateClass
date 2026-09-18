import { z } from "zod";
export const productSchema = z.object({
  title: z.string().min(3, "Title must be atleast 3 characters"),
  description: z.string().min(8, "Description must be atleast 8 characters"),
  image: z.string().min(3, "image must be atleast 3 characters"),
  category: z.enum(["Men", "Women", "Children"], {
    message: "Select a valid category",
  }),
  price: z.coerce.number().positive("Price must be greater than 0"),
  count: z.coerce.number().positive("Count must be greater than 0"),
  rate: z.coerce.number().positive("Rate must be greater than 0"),
});
