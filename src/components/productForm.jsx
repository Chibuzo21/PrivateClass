import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { months } from "../lib/data";

import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../lib/schema";
// zod is the tool that handles validation in your form. it provides the shape for your data. @/hookform/resolvers is what links your react hook form to your zod

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });

  const submitFn = (data) => {
    console.log(data);
    setTimeout(() => {
      reset();
    }, 700); //setTimeout is used for delay ie how long it should delay before an operation is carried out
  };
  return (
    <div className='w-full mx-auto max-w-5xl  p-10'>
      <h1 className='text-3xl font-semibold mb-5'>New Product</h1>
      <form
        onSubmit={handleSubmit(submitFn)}
        className='border rounded-lg border-gray-500 p-8'>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create a new product</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup className='grid grid-cols-2'>
              {/* TITLE field */}
              <Field>
                <FieldLabel htmlFor=''>Title</FieldLabel>
                <Input
                  {...register("title")}
                  placeholder='Product title'
                  required
                />
                {errors.title && (
                  <p className='text-destructive'>{errors.title.message}</p>
                )}
              </Field>

              {/* Description Field */}
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-number-uw1'>
                  Description
                </FieldLabel>
                <Input
                  {...register("description")}
                  required
                  placeholder='Describe your product'
                />
                {errors.description && (
                  <p className='text-destructive'>
                    {errors.description.message}
                  </p>
                )}
              </Field>

              {/* Image Field */}
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                  Image
                </FieldLabel>
                <Input
                  {...register("image")}
                  placeholder='Add your product image here'
                  required
                />
                {errors.image && (
                  <p className='text-destructive'>{errors.image.message}</p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                  Price
                </FieldLabel>
                <Input
                  {...register("price")}
                  placeholder='Add your price here'
                  required
                />
                {errors.price && (
                  <p className='text-destructive'>{errors.price.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel>Category</FieldLabel>
                <select
                  className='border rounded-md h-9 px-3 text-sm w-full'
                  items={months}
                  {...register("category")}>
                  {months.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className='text-destructive'>{errors.category.message}</p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Rating</FieldLegend>
            <FieldDescription>The rating for your product</FieldDescription>
            <FieldGroup>
              <div className='grid grid-cols-2 gap-8'>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                    Count
                  </FieldLabel>
                  <Input
                    {...register("count")}
                    type='number'
                    placeholder='add rate count'
                    required
                  />
                  {errors.count && (
                    <p className='text-destructive'>{errors.count.message}</p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                    Rate
                  </FieldLabel>
                  <Input
                    {...register("rate")}
                    type='number'
                    placeholder='add rate'
                    required
                  />
                  {errors.rate && (
                    <p className='text-destructive'>{errors.rate.message}</p>
                  )}
                </Field>{" "}
              </div>
            </FieldGroup>
          </FieldSet>

          <Field orientation='horizontal'>
            <Button type='submit'>Submit</Button>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
