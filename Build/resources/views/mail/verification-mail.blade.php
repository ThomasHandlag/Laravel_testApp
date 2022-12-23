<x-mail::message>
    # TSpace
   <x-mail::panel>
   <x-mail::table>
    Verification Code for payment.
    <x-mail::button :url="$url">
        TSpace
    </x-mail::button>
   </x-mail::table>
    Veritify code: {{ $veritify_code }}
    Thanks,<br>
    {{ config('app.name') }}
   </x-mail::panel>
</x-mail::message>
