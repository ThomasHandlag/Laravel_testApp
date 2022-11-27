<x-mail::message>
    # TSpace
    Verification Code for payment.
    <x-mail::button :url="'http://locahost:127.0.0.1:8080'">
        TSpace
    </x-mail::button>
    Veritify code: {{ $veritify_code }}
    Thanks,<br>
    {{ config('app.name') }}
</x-mail::message>
