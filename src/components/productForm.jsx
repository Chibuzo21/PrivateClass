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

const months = [
  { label: "All categories", value: null },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Children", value: "children" },
];

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className='w-full mx-auto max-w-5xl  p-10'>
      <h1 className='text-3xl font-semibold mb-5'>New Product</h1>
      <form className='border rounded-lg border-gray-500 p-8'>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create a new product</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup className='grid grid-cols-2'>
              <Field>
                <FieldLabel htmlFor=''>Title</FieldLabel>
                <Input
                  {...register("title")}
                  placeholder='Product title'
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-number-uw1'>
                  Description
                </FieldLabel>
                <Input
                  {...register("description")}
                  required
                  placeholder='Describe your product'
                />
              </Field>
              <Field>
                <FieldLabel htmlFor='checkout-7j9-card-name-43j'>
                  Image
                </FieldLabel>
                <Input
                  {...register("image")}
                  placeholder='Add your product image here'
                  required
                />
              </Field>

              <Field>
                <FieldLabel>Category</FieldLabel>
                <Select items={months} {...register("category")}>
                  <SelectTrigger id='checkout-exp-month-ts6'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {months.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
