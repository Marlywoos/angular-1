import {Type} from '@angular/facade';
import {Provider} from './di';
import {Console} from './console';
import {Reflector, reflector} from './reflection/reflection';
import {ReflectorReader} from './reflection/reflector_reader';
import {TestabilityRegistry} from './testability/testability';
import {PLATFORM_CORE_PROVIDERS} from './application_ref';

function _reflector(): Reflector {
  return reflector;
}

/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS: Array<Type |  {[k: string]: any} | any[]> = /*@ts2dart_const*/ [
  PLATFORM_CORE_PROVIDERS,
  {provide: Reflector, useFactory: _reflector, deps: []},
  {provide: ReflectorReader, useExisting: Reflector},
  TestabilityRegistry,
  Console
];
